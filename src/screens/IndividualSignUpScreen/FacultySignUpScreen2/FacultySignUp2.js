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
import userImage from "../../../../assets/images/user.png";
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

const FacultySignUp = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  //user info to send to database
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [interest, setInterest] = useState("");
  const [projectPreference, setprojectPreference] = useState("");

  const onLoginPressed = () => {
    navigation.navigate("SignIn");
  };
  const onSignUpPressed = () => {
    navigation.navigate("ProjectSearchPage");
    const database = getDatabase();
    const reference = ref(database, "Users/" + auth.currentUser.uid);
    update(reference, {
      experience: experience,
      interest: interest,
      location: location,
      projectPreference: projectPreference,
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
            <Text style={styles.h1}>Faculty Sign Up</Text>
            <Text style={styles.h2}>Please enter the information below</Text>

            <CustomDropDown
              image={cityImage}
              textInputValue="CITY"
              value={location}
              setValue={setLocation}
            />
            <CustomDropDown
              image={clubImage}
              textInputValue="WORK/CLUB EXPERIENCE"
              value={experience}
              setValue={setExperience}
            />
            <CustomDropDown
              image={Like}
              textInputValue="INTERESTS"
              value={interest}
              setValue={setInterest}
            />
            <CustomInput
              image={Search}
              placeholder="PROJECT PREFERENCE"
              value={projectPreference}
              setValue={setprojectPreference}
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
    justifyContent: "flex-start",
    marginBottom: "50%",
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

export default FacultySignUp;
