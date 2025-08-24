import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppNavigator } from "@/navigation/AppNavigator";
import { StorageService } from "@/services/storage";
import { PasswordOptions } from "@/types";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync(MaterialCommunityIcons.font);

        // Initialize user preferences if first launch
        const isFirstLaunch = await StorageService.isFirstLaunch();
        if (isFirstLaunch) {
          const defaultPreferences = {
            theme: "system" as const,
            defaultOptions: {
              length: 16,
              includeUppercase: true,
              includeLowercase: true,
              includeNumbers: true,
              includeSymbols: true,
              excludeAmbiguous: false,
              customCharacters: "",
              excludeCharacters: "",
            } as PasswordOptions,
            autoSave: true,
            hapticFeedback: true,
            showPasswordStrength: true,
            quickCopyEnabled: true,
          };

          await StorageService.saveUserPreferences(defaultPreferences);
          await StorageService.setFirstLaunchComplete();

          // Initialize default ad config
          await StorageService.saveAdConfig({
            showBanner: true,
            interstitialFrequency: 5,
            passwordsGeneratedSinceAd: 0,
          });
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <PaperProvider>
          <AppNavigator />
          <StatusBar style="auto" />
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
