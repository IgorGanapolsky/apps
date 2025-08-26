import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserPreferences, User } from "@/types";

const STORAGE_KEYS = {
  USER_DATA: "@AppTemplate:userData",
  USER_PREFERENCES: "@AppTemplate:userPreferences",
  FIRST_LAUNCH: "@AppTemplate:firstLaunch",
  APP_DATA: "@AppTemplate:appData",
};

export class StorageService {
  // User Data
  static async getUserData(): Promise<User | null> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      if (data) {
        const user = JSON.parse(data);
        // Convert date strings back to Date objects
        return {
          ...user,
          createdAt: new Date(user.createdAt),
          updatedAt: user.updatedAt ? new Date(user.updatedAt) : undefined,
        };
      }
      return null;
    } catch (error) {
      console.error("Error loading user data:", error);
      return null;
    }
  }

  static async saveUserData(user: User): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  }

  static async clearUserData(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
    } catch (error) {
      console.error("Error clearing user data:", error);
      throw error;
    }
  }

  // User Preferences
  static async getUserPreferences(): Promise<UserPreferences | null> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading user preferences:", error);
      return null;
    }
  }

  static async saveUserPreferences(
    preferences: UserPreferences,
  ): Promise<void> {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_PREFERENCES,
        JSON.stringify(preferences),
      );
    } catch (error) {
      console.error("Error saving user preferences:", error);
      throw error;
    }
  }

  // First Launch
  static async isFirstLaunch(): Promise<boolean> {
    try {
      const hasLaunched = await AsyncStorage.getItem(STORAGE_KEYS.FIRST_LAUNCH);
      return hasLaunched === null;
    } catch (error) {
      console.error("Error checking first launch:", error);
      return false;
    }
  }

  static async setFirstLaunchComplete(): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.FIRST_LAUNCH, "true");
    } catch (error) {
      console.error("Error setting first launch complete:", error);
      throw error;
    }
  }

  // Generic App Data Storage
  static async getAppData<T>(key: string): Promise<T | null> {
    try {
      const data = await AsyncStorage.getItem(
        `${STORAGE_KEYS.APP_DATA}:${key}`,
      );
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error loading app data for ${key}:`, error);
      return null;
    }
  }

  static async setAppData<T>(key: string, data: T): Promise<void> {
    try {
      await AsyncStorage.setItem(
        `${STORAGE_KEYS.APP_DATA}:${key}`,
        JSON.stringify(data),
      );
    } catch (error) {
      console.error(`Error saving app data for ${key}:`, error);
      throw error;
    }
  }

  // Clear All Data
  static async clearAllData(): Promise<void> {
    try {
      const keys = Object.values(STORAGE_KEYS);
      await AsyncStorage.multiRemove(keys);

      // Also clear any app data keys
      const allKeys = await AsyncStorage.getAllKeys();
      const appDataKeys = allKeys.filter((key) =>
        key.startsWith(STORAGE_KEYS.APP_DATA),
      );
      if (appDataKeys.length > 0) {
        await AsyncStorage.multiRemove(appDataKeys);
      }
    } catch (error) {
      console.error("Error clearing all data:", error);
      throw error;
    }
  }

  // Export/Import for backup
  static async exportData(): Promise<string> {
    try {
      const data = {
        userData: await this.getUserData(),
        userPreferences: await this.getUserPreferences(),
        // Add other data to export as needed
      };
      return JSON.stringify(data);
    } catch (error) {
      console.error("Error exporting data:", error);
      throw error;
    }
  }

  static async importData(jsonData: string): Promise<void> {
    try {
      const data = JSON.parse(jsonData);

      if (data.userData) {
        await this.saveUserData(data.userData);
      }
      if (data.userPreferences) {
        await this.saveUserPreferences(data.userPreferences);
      }
      // Import other data as needed
    } catch (error) {
      console.error("Error importing data:", error);
      throw error;
    }
  }
}
