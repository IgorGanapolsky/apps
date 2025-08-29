# CI/CD Workflows

This directory contains our GitHub Actions workflows for continuous integration and deployment.

## Workflows Overview

### 1. EAS Build (`eas-build.yml`)
Handles building our React Native/Expo application for both iOS and Android platforms.
- Triggers: Push to main/develop, PRs to main/develop
- Key features:
  - Automatic dependency installation
  - Retry mechanism for flaky installations
  - Parallel builds for iOS and Android
  - Build caching for faster builds

Required secrets:
- `EXPO_TOKEN`: Your Expo access token

### 2. Code Quality (`code-quality.yml`)
Ensures code quality standards are maintained.
- Triggers: Push to main/develop, PRs to main/develop
- Checks:
  - ESLint for code style
  - TypeScript type checking
  - Unit tests with coverage reporting
  - Code coverage upload to Codecov

Required secrets:
- `CODECOV_TOKEN`: Your Codecov upload token

### 3. Security Scan (`security.yml`)
Performs security analysis of our codebase.
- Triggers: Push to main/develop, PRs to main/develop, daily at midnight UTC
- Scans:
  - SAST (Static Application Security Testing)
  - Dependency vulnerability scanning
  - Secret scanning
  - Software composition analysis

## Troubleshooting

### Common Issues

1. **EAS Build Failures**
   - Check Expo credentials are correctly configured
   - Verify `EXPO_TOKEN` is set and valid
   - Review build logs for specific error messages

2. **Code Quality Failures**
   - Run `yarn lint` locally to catch issues before pushing
   - Run `yarn typecheck` to verify types
   - Run `yarn test` to verify tests pass

3. **Security Scan Failures**
   - Review dependency audit results
   - Check for exposed secrets
   - Update vulnerable dependencies

### Getting Help

If you encounter issues:
1. Check the specific workflow run for detailed error logs
2. Review relevant documentation in our codebase
3. Contact the DevOps team for assistance

## Status Badges

[![EAS Build](https://github.com/IgorGanapolsky/apps/actions/workflows/eas-build.yml/badge.svg)](https://github.com/IgorGanapolsky/apps/actions/workflows/eas-build.yml)
[![Code Quality](https://github.com/IgorGanapolsky/apps/actions/workflows/code-quality.yml/badge.svg)](https://github.com/IgorGanapolsky/apps/actions/workflows/code-quality.yml)
[![Security Scan](https://github.com/IgorGanapolsky/apps/actions/workflows/security.yml/badge.svg)](https://github.com/IgorGanapolsky/apps/actions/workflows/security.yml)
