import { StyleSheet, Text, SafeAreaView } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import Navigation from "./src/navigation";
// View -> UIVIEW
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3950",
  },
});
