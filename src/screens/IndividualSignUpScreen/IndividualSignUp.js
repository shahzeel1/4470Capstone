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
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import personImage from "../../../assets/images/user.png";
import Logo from "../../../assets/images/CadmanLogoDark1.png";

const IndividualSignUp = () => {
    const navigation = useNavigation();
    const onStudentPressed = () => {
      navigation.navigate("StudentSignUp");
    };
    const onFacultyPressed = () => {
      navigation.navigate("FacultySignUp");
    };
    const onProfessionalPressed = () => {
      navigation.navigate("ProfessionalSignUp");
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
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
            <Text style={styles.h1}>Sign Up</Text>
            <Text style={styles.h2}>
              What type of individual are you?
            </Text>
              <View style={{flexDirection: "row", alignSelf: "center", justifyContent: "center", flexWrap: "wrap"}}>
                  <View style={styles.options}>
                    <CustomButton
                      icon={personImage}
                      onPress={onStudentPressed}
                      style={{ padding: 30, alignSelf: "center"}}
                    />
                    <Text style={styles.label}>STUDENT</Text>
                  </View>
                  <View style={styles.options}>
                    <CustomButton
                      icon={personImage}
                      onPress={onFacultyPressed}
                      style={{ padding: 30, alignSelf: "center" }}
                    />
                  <Text style={styles.label}>FACULTY</Text>
                  </View>
               
              
                  <View style={styles.options}>
                      <CustomButton
                        icon={personImage}
                        onPress={onProfessionalPressed}
                        style={{ padding: 30, alignSelf: "center" }}
                      />
                      <Text style={styles.label}>PROFESSIONAL</Text>
                    </View>
                </View> 
                
                  <CustomButton
                    text="Already have an account? Sign In"
                    onPress={onLoginPressed}
                    type="TERTIARY"
                    style={{ padding: 10, alignSelf: "center"}}
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
        height: "30%",
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
    
    export default IndividualSignUp;