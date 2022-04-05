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
import orgImage from "../../../assets/images/enterprise.png";
import personImage from "../../../assets/images/user2.png";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../../../firebase";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const onLogInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onOrgPressed = () => {
    const database = getDatabase();
    console.log(database);
    const reference = ref(database, "users/" + auth.currentUser.uid);
    set(reference, {
      accountType: "organization",
    });
    navigation.navigate("ClubOrCompany");
  };
  const onIndivPressed = () => {
    navigation.navigate("IndividualSignUp");
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
          <Image source={Logo} style={[styles.logo]} resizeMode="contain" />
          <Text style={styles.h1}>Sign Up</Text>
          <Text style={styles.h2}>
            Please select the type of account you would like to create
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View style={styles.options}>
              <CustomButton
                icon={orgImage}
                onPress={onOrgPressed}
                style={{ padding: 30, alignSelf: "center" }}
              />
              <Text style={styles.label}>ORGANIZATION</Text>
            </View>
            <View style={styles.options}>
              <CustomButton
                icon={personImage}
                onPress={onIndivPressed}
                style={{ padding: 30, alignSelf: "center" }}
              />
              <Text style={styles.label}>INDIVIDUAL</Text>
            </View>
          </View>

          <CustomButton
            text="Already have an account? Sign In"
            onPress={onLogInPressed}
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
  options: {
    marginVertical: 50,
    width: "50%",
    height: "50%",
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
  label: {
    paddingLeft: 30,
    fontFamily: "Prompt_500Medium",
    fontSize: 15,
    color: "#0F6BAC",
    alignSelf: "center",
  },
});

export default SignUpScreen;
