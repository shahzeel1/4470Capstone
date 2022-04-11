import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import emailImage from "../../../assets/images/email2.png";
import passwordImage from "../../../assets/images/padlock.png";
import school from "../../../assets/images/school.png";
import city from "../../../assets/images/city.png";
import book from "../../../assets/images/book.png";
import Logo from "../../../assets/images/CadmanLogoDark1.png";
import orgImage from "../../../assets/images/enterprise.png";
import personImage from "../../../assets/images/user2.png";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomDropDown from "../../components/CustomDropDown";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../../../firebase";


const ApplyPage = () => {
  const { height } = useWindowDimensions();
  const [applicantName, setApplicantName] = useState("");
  const [applicantRole, setApplicantRole] = useState("");
  const [applicantSchool, setApplicantSchool] = useState("");
  const [applicantCity, setApplicantCity] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");

  //get from db
  var roleOptions = ['Software Engineer', 'media'];
  const navigation = useNavigation();
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onApplyPressed = () => {
    navigation.navigate("ProjectSearchPage");
    const database = getDatabase();
    const reference = ref(database, "Projects/" + auth.currentUser.uid);
    set(reference, {
      userId:auth.currentUser.uid,
      applicantName : applicantName,
      applicantRole: applicantRole,
      applicantSchool: applicantSchool,
      applicantCity: applicantCity,
      applicantMessage: applicantMessage,
    });
  };

  const onBackPressed = () => {
    navigation.navigate("ProjectSearchPage");
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

       <ScrollView Style={styles.scrollView}>
         <CustomButton
            text="Back"
            onPress={onBackPressed}
            type="SECONDARY"
            style={styles.backButton}
          />
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <Text style={styles.header}>
            Enter your Info:
          </Text>
          <CustomInput
            image={book}
            placeholder="Name"
            value={applicantName}
            setValue={setApplicantName}
            styleChoice={"CreateProject"}
          />
          <CustomDropDown
            image={book}
            placeholder="Role"
            options =  {roleOptions}
            value={applicantRole}
            setValue={setApplicantRole}
            styleSelect = "createPage"
          />
          <CustomInput
            image={school}
            placeholder="School"
            value={applicantSchool}
            setValue={setApplicantSchool}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={school}
            placeholder="Location"
            value={applicantCity}
            setValue={setApplicantCity}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={book}
            placeholder="Additional Message"
            value={applicantMessage}
            setValue={setApplicantMessage}
            styleChoice={"CreateProject"}
          />
          <CustomButton
            text="Apply to Project"
            onPress={onApplyPressed}
            type="SECONDARY"
            style={{ padding: 10, alignSelf: "center" }}
          />


        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#2A3950",
      },
    scrollView: {
      flex:1,
      backgroundColor: "#2A3950",
      marginHorizontal: 20,
      marginVertical:100,
      alignSelf:"center",
    },
    logo: {
      width: "100%",
      maxWidth: 300,
      maxHeight: 200,
      padding: 20,
      alignSelf: "center",
    },
    header: {
      color: "#FFFFFF",
      fontFamily: "Prompt_500Medium",
      fontSize: 39,
      textAlign: "center",
      backgroundColor: "#2A3950",
      marginBottom:13,
    },
    text: {
      fontSize: 22,
    },
    backButton:{
      position: 'absolute',
      left: 5,
      width:72,
      top: -2,
      marginLeft:3,
    },
  });
  
export default ApplyPage;

