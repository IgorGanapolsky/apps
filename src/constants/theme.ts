import { ThemeColors } from "@/types";

export const lightTheme: ThemeColors = {
  primary: "#007AFF",
  primaryDark: "#0051D5",
  accent: "#FF3B30",
  background: "#FFFFFF",
  surface: "#F2F2F7",
  text: "#000000",
  textSecondary: "#8E8E93",
  error: "#FF3B30",
  success: "#34C759",
  warning: "#FF9500",
  info: "#5AC8FA",
  divider: "#C6C6C8",
  gradient: {
    start: "#007AFF",
    end: "#0051D5",
  },
};

export const darkTheme: ThemeColors = {
  primary: "#0A84FF",
  primaryDark: "#0051D5",
  accent: "#FF453A",
  background: "#000000",
  surface: "#1C1C1E",
  text: "#FFFFFF",
  textSecondary: "#8E8E93",
  error: "#FF453A",
  success: "#32D74B",
  warning: "#FF9F0A",
  info: "#64D2FF",
  divider: "#38383A",
  gradient: {
    start: "#0A84FF",
    end: "#0051D5",
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
};

export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};
