import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../../../assets/images/WTH_logo.png";
import emailImage from "../../../assets/images/email2.png";
import passwordImage from "../../../assets/images/padlock.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";

const ForgotPasswordScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPressed = () => {};
  const onForgotPasswordPressed = () => {};

  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Text style={styles.h1}>Forgot Password</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
    marginTop: "50%",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    padding: 30,
    alignSelf: "center",
  },
  h1: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 39,
    textAlign: "left",
    paddingLeft: 30,
    paddingBottom: 10,
    paddingTop: 30,
  },
  h2: {
    paddingLeft: 30,
    paddingTop: 10,
    fontFamily: "Prompt_500Medium",
    fontSize: 15,
    color: "#0F6BAC",
  },
});

export default ForgotPasswordScreen;
