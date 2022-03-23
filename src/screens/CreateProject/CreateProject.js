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


const CreateProject = () => {
  const { height } = useWindowDimensions();
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectSchool, setProjectSchool] = useState("");
  const [projectCity, setProjectCity] = useState("");
  const [projectIndustry, setProjectIndustry] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [projectFaculty, setProjectFaculty] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectRoles, setProjectRoles] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [projectSponsorship, setProjectSponsorship] = useState("");
  const [projectBadge, setProjectBadge] = useState("");
  const [projectImage, setProjectImage] = useState("");

  var projectDurationOptions = ["6 Months", "1 Year", "2 Years", "3 Years", "Indefinite"];

  const navigation = useNavigation();
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onCreatePressed = () => {
    navigation.navigate("ProjectPage");
  };

  const onBackPressed = () => {
    navigation.navigate("ProjectPage");
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
            Enter project details:
          </Text>
          <CustomInput
            image={book}
            placeholder="Project Name"
            value={projectName}
            setValue={setProjectName}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={book}
            placeholder="Project Type"
            value={projectType}
            setValue={setProjectType}
            styleChoice={"CreateProject"}
          />
          <CustomDropDown
            image={book}
            placeholder="Project Duration"
            options =  {projectDurationOptions}
            value={projectDuration}
            setValue={setProjectDuration}
          />
          <CustomInput
            image={school}
            placeholder="School"
            value={projectSchool}
            setValue={setProjectSchool}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={book}
            placeholder="Project School"
            value={projectSchool}
            setValue={setProjectSchool}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project City"
            value={projectCity}
            setValue={setProjectCity}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Industry"
            value={projectIndustry}
            setValue={setProjectIndustry}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Technology"
            value={projectTech}
            setValue={setProjectTech}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project Faculty"
            value={projectFaculty}
            setValue={setProjectFaculty}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project Description"
            value={projectDescription}
            setValue={setProjectDescription}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project Roles"
            value={projectRoles}
            setValue={setProjectRoles}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project Notes"
            value={projectNotes}
            setValue={setProjectNotes}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project Sponsorship"
            value={projectSponsorship}
            setValue={setProjectSponsorship}
            styleChoice={"CreateProject"}
          />
          <CustomInput
            image={city}
            placeholder="Project Image"
            value={projectImage}
            setValue={setProjectImage}
            styleChoice={"CreateProject"}
          />
          <CustomButton
            text="Create Project"
            onPress={onCreatePressed}
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
  
export default CreateProject;
