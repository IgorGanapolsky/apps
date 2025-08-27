import React from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SettingsScreen: React.FC = () => {
  const [exampleSetting, setExampleSetting] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Example Setting</Text>
            <Switch value={exampleSetting} onValueChange={setExampleSetting} />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>App Version</Text>
            <Text style={styles.settingValue}>1.0.0</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            This is a template app built with React Native and Expo. Customize
            this screen to add your app&apos;s settings.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    padding: 20,
    paddingBottom: 10,
  },
  section: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  settingLabel: {
    fontSize: 16,
    color: "#333",
  },
  settingValue: {
    fontSize: 16,
    color: "#666",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
