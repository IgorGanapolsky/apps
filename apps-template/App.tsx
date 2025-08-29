import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Sentry from '@sentry/react-native';

// Initialize Sentry
Sentry.init({
  dsn: 'https://f51e85c3bd8c51d99059d901a5954113@o4509329568235520.ingest.us.sentry.io/4509329571315712',
  enableAutoPerformanceTracking: true,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  tracesSampleRate: 1.0,
});

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
