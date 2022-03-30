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
import Logo from "../../../assets/images/CadmanLogoDark1.png";
import emailImage from "../../../assets/images/email2.png";
import passwordImage from "../../../assets/images/padlock.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
const SignUpScreenFirst = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = async () => {
    console.log("Trying to signup with user: " + username);
    navigation.navigate("SignUp");
  };

  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <Text style={styles.h1}>Sign Up</Text>
          <Text style={styles.h2}>Please create an account</Text>
          <CustomInput
            image={emailImage}
            placeholder="EMAIL"
            value={username}
            setValue={setUsername}
            secureTextEntry={false}
          />
          <CustomInput
            image={passwordImage}
            placeholder="PASSWORD"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomButton
            text="Sign Up"
            onPress={onSignUpPressed}
            style={{ padding: 30, alignSelf: "center" }}
          />
          <CustomButton
            text="Forgot Password"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
            style={{ padding: 20, alignSelf: "center" }}
          />
          <CustomButton
            text="Already have an account? Sign In"
            onPress={onSignInPressed}
            type="TERTIARY"
            style={{ padding: 10, alignSelf: "center" }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3950",
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
    paddingTop: 30,
  },
  h2: {
    paddingLeft: 30,
    fontFamily: "Prompt_500Medium",
    fontSize: 15,
    color: "#0F6BAC",
  },
});

export default SignUpScreenFirst;
