import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Book from "../../../../assets/images/book.png";
import Like from "../../../../assets/images/like.png";
import Search from "../../../../assets/images/search.png";
import Logo from "../../../../assets/images/CadmanLogoDark1.png";
import cityImage from "../../../../assets/images/city.png";
import schoolImage from "../../../../assets/images/school.png";
import clubImage from "../../../../assets/images/club.png";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import CustomDropDown from "../../../components/CustomDropDown";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../../../../firebase";

const ProfessionalSignUp = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  //user info to send to database
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [interest, setInterest] = useState("");
  const [projectPreference, setProjectPreference] = useState("");

  const onNextPressed = () => {
    navigation.navigate("ProfessionalSignUp2");
    const database = getDatabase();
    const reference = ref(database, "Users/" + auth.currentUser.uid);
    set(reference, {
      accountType: "professional",
      companyName: companyName,
      interest: interest,
      location: location,
      projectPreference: projectPreference,
      email: auth.currentUser.email,
      school: school,
      experience: experience,
      major: major,
      minor: minor,
    });
  };

  const onLoginPressed = () => {
    navigation.navigate("SignIn");
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
      <ScrollView
        Style={styles.scrollView}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.h1}>Professional Signup</Text>
            <Text style={styles.h2}>Please enter the information below</Text>
            <CustomInput
              image={schoolImage}
              placeholder="COMPANY"
              value={companyName}
              setValue={setCompanyName}
            />
            <CustomDropDown
              image={cityImage}
              textInputValue="CITY"
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
              image={Like}
              textInputValue="INTERESTS"
              value={interest}
              setValue={setInterest}
              options={[
                "Coding",
                "AI",
                "Development",
                "Psychology",
                "Finance",
                "Investing",
              ]}
            />
            <CustomInput
              image={Search}
              placeholder="PROJECT PREFERENCE"
              value={projectPreference}
              setValue={setProjectPreference}
            />
            <CustomButton
              text="NEXT"
              onPress={onNextPressed}
              style={{ padding: 30, alignSelf: "center" }}
            />
            <CustomButton
              text="Already have an account? Sign In"
              onPress={onLoginPressed}
              type="TERTIARY"
              style={{ padding: 10, alignSelf: "center" }}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3950",
  },
  inner: {
    padding: 12,
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: "120%",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    padding: 30,
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#2A3950",
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

export default ProfessionalSignUp;
