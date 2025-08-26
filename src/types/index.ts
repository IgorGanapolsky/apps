// Example types for your app
export interface User {
  id: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  notifications: boolean;
  language: string;
}

export interface AppState {
  user: User | null;
  preferences: UserPreferences;
  isLoading: boolean;
  error: string | null;
}

// Add your app-specific types here
export interface ExampleItem {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
}

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  divider: string;
  gradient: {
    start: string;
    end: string;
  };
}

export type NavigationParamList = {
  Home: undefined;
  History: undefined;
  Settings: undefined;
  Premium:
    | {
        source?: "menu" | "limit" | "feature";
      }
    | undefined;
  About: undefined;
  PrivacyPolicy: undefined;
  TermsOfService: undefined;
  MainTabs: undefined;
};

// Narrowed navigator param lists for specific navigators
export type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Settings: undefined;
  Premium: { source?: "menu" | "limit" | "feature" } | undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
};
