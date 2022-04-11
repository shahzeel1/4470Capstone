import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Logo from "../../../assets/images/CadmanLogoDark1.png";
import cityImage from "../../../assets/images/city.png";
import userImage from "../../../assets/images/user.png";
import clubImage from "../../../assets/images/club.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDropDown from "../../components/CustomDropDown";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../../../firebase";

const CompanySignUpScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [feild, setFeild] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [description, setDescription] = useState("");

  const onLoginPressed = () => {
    navigation.navigate("SignIn");
  };
  const onSignUpPressed = () => {
    navigation.navigate("ProfilePage");
    const database = getDatabase();
    const reference = ref(database, "Users/" + auth.currentUser.uid);
    set(reference, {
      accountType: "company",
      name: companyName,
      location: location,
      feild: feild,
      companySize: companySize,
      description: description,
      email: auth.currentUser.email,
    });
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
        <ScrollView>
          <View style={styles.inner}>
            <Text style={styles.h1}>Company Sign Up</Text>
            <Text style={styles.h2}>Please enter the information below</Text>
            <CustomInput
              image={userImage}
              placeholder="NAME"
              type="text"
              value={companyName}
              setValue={setCompanyName}
            />
            <CustomDropDown
              image={cityImage}
              textInputValue="CITY"
              type="text"
              value={location}
              setValue={setLocation}
              options={[
                "Toronto",
                "London",
                "Calgary",
                "Montreal",
                "Ottawa",
                "Other",
              ]}
            />
            <CustomDropDown
              image={clubImage}
              textInputValue="FIELD"
              type="text"
              value={feild}
              setValue={setFeild}
              options={[
                "Engineering",
                "Medicine",
                "Law",
                "Education",
                "Business",
                "Science",
                "Other",
              ]}
            />
            <CustomDropDown
              image={clubImage}
              textInputValue="COMPANY SIZE"
              type="text"
              value={companySize}
              setValue={setCompanySize}
              options={["1-10", "10-50", "50-100", "100-1000", "1000+"]}
            />
            <CustomInput
              image={clubImage}
              placeholder="COMPANY DESRCRIPTION"
              type="text"
              value={description}
              setValue={setDescription}
            />
            <CustomButton
              text="SIGN UP"
              onPress={onSignUpPressed}
              style={{ padding: 30, alignSelf: "center" }}
            />
            <CustomButton
              text="Already have an account? Sign In"
              onPress={onLoginPressed}
              type="TERTIARY"
              style={{ padding: 10, alignSelf: "center" }}
            />
          </View>
        </ScrollView>
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

export default CompanySignUpScreen;
