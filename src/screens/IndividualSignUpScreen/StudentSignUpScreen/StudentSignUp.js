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
import userImage from "../../../../assets/images/user.png";
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

const StudentSignUp = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  //user info to send to database
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [interest, setInterest] = useState("");
  const [projectPreference, setProjectPreference] = useState("");

  const onLoginPressed = () => {
    navigation.navigate("SignIn");
  };
  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  const onNextPressed = () => {
    navigation.navigate("StudentSignUp2");
    const database = getDatabase();
    const reference = ref(database, "Users/" + auth.currentUser.uid);
    set(reference, {
      accountType: "Student",
      name: name,
      major: major,
      minor: minor,
      school: school,
      email: auth.currentUser.email,
    });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView Style={styles.ScrollView}>
          <View style={styles.inner}>
            <Text style={styles.h1}>Student Signup</Text>
            <Text style={styles.h2}>Please enter the information below</Text>
            <CustomInput
              image={userImage}
              placeholder="NAME"
              value={name}
              setValue={setName}
            />
            <CustomDropDown
              image={Book}
              textInputValue="MAJOR"
              value={major}
              setValue={setMajor}
              options={[
                "Business",
                "Pre-Med",
                "Social Sciences",
                "Sciences",
                "Engineering",
                "Computer Science",
                "Other",
              ]}
            />
            <CustomDropDown
              image={Book}
              textInputValue="MINOR"
              value={minor}
              setValue={setMinor}
              options={[
                "Business",
                "Pre-Med",
                "Social Sciences",
                "Sciences",
                "Engineering",
                "Computer Science",
                "Other",
              ]}
            />
            <CustomDropDown
              image={schoolImage}
              textInputValue="SCHOOL"
              value={school}
              setValue={setSchool}
              options={[
                "Western University",
                "Univeristy of Toronto",
                "University of Waterloo",
                "Other",
              ]}
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

export default StudentSignUp;
