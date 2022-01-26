
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
// View -> UIVIEW
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3950'

  },
});