import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Your App</Text>
        <Text style={styles.subtitle}>
          This is a template for building React Native apps with Expo
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <Text style={styles.description}>
            Edit this screen in src/screens/HomeScreen.tsx to start building
            your app.
          </Text>
        </View>

        <Button
          title="Example Action"
          onPress={() => console.log("Button pressed")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  section: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
