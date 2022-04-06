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
  ScrollView,
} from "react-native";
import Logo from "../../../assets/images/CadmanLogoDark1.png";
import cityImage from "../../../assets/images/city.png";
import schoolImage from "../../../assets/images/school.png";
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

const ClubSignUpScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

//user info to send to database
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [feild, setFeild] = useState("");
  const [description, setDescription] = useState("");
  const [faculty, setFaculty] = useState("");
  const [school, setSchool] = useState("");


  const onLoginPressed = () => {
    navigation.navigate("SignIn");
  };
  const onSignUpPressed = () => {
    navigation.navigate("ProjectSearchPage");
    const database = getDatabase();
    const reference = ref(database, "Users/" + auth.currentUser.uid);
    set(reference, {
      accountType: "club",
      name: companyName,
      location: location,
      feild: feild,
      faculty: faculty,
      school:school,
      description: description,
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
            <Text style={styles.h1}>Club Sign Up</Text>
            <Text style={styles.h2}>Please enter the information below</Text>
            <CustomInput image={userImage} placeholder="NAME" value={companyName} setValue={setCompanyName}/>
            <CustomDropDown
              image={cityImage}
              textInputValue="CITY"
              options={["London", "Toronto"]}
              value={location} 
              setValue={setLocation} 
            />
            <CustomDropDown
              image={schoolImage}
              textInputValue="SCHOOL"
              options={["Western University", "Univeristy of Toronto"]}
              value={school} 
              setValue={setSchool} 
            />
            <CustomDropDown
              image={clubImage}
              textInputValue="FACULTY"
              options={["Science", "Business", "Engineering"]}
              value={faculty} 
              setValue={setFaculty} 
            />
            <CustomDropDown
              image={clubImage}
              textInputValue="FIELD"
              options={["Software Engineer", "Medicine"]}
              value={feild} 
              setValue={setFeild} 
            />
            <CustomInput image={clubImage}  
              value={description} 
              setValue={setDescription}  
              placeholder="CLUB DESRCRIPTION" />
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

export default ClubSignUpScreen;
