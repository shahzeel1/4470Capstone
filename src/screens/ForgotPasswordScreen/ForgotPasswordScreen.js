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

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const onSignInPressed = () => {};
  const onResetPasswordPressed = () => {
    navigation.navigate("ResetConfirmation");
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
          <Text style={styles.h1}>Forgot Password</Text>
          <Text style={styles.h2}>Please enter your email</Text>
          <CustomInput
            image={emailImage}
            placeholder="EMAIL"
            value={username}
            setValue={setUsername}
            secureTextEntry={false}
          />
          <CustomButton
            text="RESET PASSWORD"
            onPress={onResetPasswordPressed}
            style={{
              marginTop: "5%",
              marginBottom: "5%",
              padding: 30,
              alignSelf: "center",
            }}
          />

          <CustomButton
            text="Don't have an account? Sign Up"
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
    marginBottom: "5%",
  },
});

export default SignInScreen;
