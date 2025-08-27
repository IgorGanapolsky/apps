#!/usr/bin/env bash
set -Eeuo pipefail

# OpenHands wrapper: prefers Docker; falls back to Python venv
# Usage examples:
#   npm run ai -- --help
#   npm run ai -- run --non-interactive --goal "Refactor code" --repo .

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

# Load local env if present
if [[ -f "$REPO_ROOT/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$REPO_ROOT/.env"
  set +a
fi

# Defaults (can be overridden in .env or environment)
: "${OPENHANDS_PROVIDER:=openai}"
: "${OPENHANDS_MODEL:=gpt-4o-mini}"
export OPENHANDS_PROVIDER OPENHANDS_MODEL

have() { command -v "$1" >/dev/null 2>&1; }

run_in_docker() {
  local image
  image="${OPENHANDS_IMAGE:-ghcr.io/all-hands-ai/openhands:latest}"

  # Build command list to try inside container
  local args_quoted
  args_quoted="$(printf ' %q' "$@")"

  local docker=(
    docker run --rm -t \
      -e OPENAI_API_KEY \
      -e OPENHANDS_PROVIDER \
      -e OPENHANDS_MODEL \
      -v "$REPO_ROOT":/workspace \
      -w /workspace \
      "$image"
  )

  echo "[OpenHands] Using Docker image: $image" >&2

  # Try several invocation forms for compatibility with CLI versions
  local cmd
  for cmd in \
    "openhands${args_quoted}" \
    "openhands run${args_quoted}" \
    "python -m openhands${args_quoted}" \
    "python -m openhands run${args_quoted}"; do
    if "${docker[@]}" sh -lc "$cmd"; then
      return 0
    fi
  done
  return 1
}

run_in_venv() {
  if ! have python3; then
    echo "python3 is required to run OpenHands without Docker. Please install Python 3.11+ or enable Docker." >&2
    return 2
  fi
  if [[ ! -d "$REPO_ROOT/.venv" ]]; then
    echo "[OpenHands] Creating virtual environment at .venv" >&2
    python3 -m venv "$REPO_ROOT/.venv"
  fi
  # shellcheck disable=SC1091
  source "$REPO_ROOT/.venv/bin/activate"
  python -m pip install --upgrade pip >/dev/null
  if ! python -c "import importlib.util, sys; sys.exit(0 if importlib.util.find_spec('openhands') else 1)"; then
    echo "[OpenHands] Installing openhands package in .venv" >&2
    pip install --quiet --disable-pip-version-check openhands
  fi

  echo "[OpenHands] Using Python venv at .venv" >&2

  # Try several invocation forms
  if command -v openhands >/dev/null 2>&1; then
    if openhands "$@"; then return 0; fi
    if openhands run "$@"; then return 0; fi
  fi
  if python -m openhands "$@"; then return 0; fi
  if python -m openhands run "$@"; then return 0; fi
  return 1
}

print_usage() {
  cat >&2 <<'USAGE'
OpenHands wrapper

Usage:
  npm run ai -- [OpenHands CLI args]

Examples:
  npm run ai -- --help
  npm run ai -- run --non-interactive --goal "Refactor the codebase to improve readability" --repo .

Notes:
- Set OPENAI_API_KEY in your environment or in .env to enable provider access.
- Defaults: OPENHANDS_PROVIDER=openai, OPENHANDS_MODEL=gpt-4o-mini
USAGE
}

if [[ $# -eq 0 ]]; then
  print_usage
  exit 2
fi

# Ensure sensitive env is exported if present
export OPENAI_API_KEY=${OPENAI_API_KEY:-}

if have docker; then
  if run_in_docker "$@"; then
    exit 0
  fi
  echo "[OpenHands] Docker path failed, falling back to Python venv..." >&2
fi

if run_in_venv "$@"; then
  exit 0
fi

echo "[OpenHands] Failed to run OpenHands with known invocation patterns. Try 'npm run ai -- --help' to inspect CLI." >&2
exit 1

