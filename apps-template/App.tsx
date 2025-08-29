import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { initializeSentry } from './src/config/sentry';

// Initialize Sentry
initializeSentry();

export default function App() {
  const throwTestError = () => {
    throw new Error('Test Sentry Error');
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Test Sentry" onPress={throwTestError} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
