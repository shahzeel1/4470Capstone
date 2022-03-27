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

import PersonImage from "../../../assets/images/user.png";
import NotificationImage from "../../../assets/images/notification.png";
import HomeImage from "../../../assets/images/city.png";
import MessageImage from "../../../assets/images/email.png";
import orgImage from "../../../assets/images/enterprise.png";
import school from "../../../assets/images/school.png";
import search from "../../../assets/images/search.png";
import project from "../../../assets/images/book.png";

import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import NotificationDisplay from "../../components/NotificationDisplay/NotificationDisplay";


const Notifications = () => {

  //page navigation
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const onProjectSearchPagePressed = () => {
    navigation.navigate("ProjectSearchPage");
  };
  const onBackPressed = () => {
    navigation.navigate("ProjectSearchPage");
  };
  const onNotificationPressed = () => {
  };
  const onProfilePressed = () => {
    navigation.navigate("ProfilePage");
  };
  const onMessagePressed = () => {
    navigation.navigate("MessagePage");
  };
  const onMyProjectsPressed = () => {
    navigation.navigate("MyProjectsPage");
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

        <View style={styles.headBar}>
          <Text style={styles.headBarText}>
                Notifications
          </Text>
          <CustomButton
            text="Back"
            onPress={onBackPressed}
            type="SECONDARY"
            style={styles.backButton}
          />
        </View>
       <ScrollView Style={styles.scrollView}>
            <NotificationDisplay 

            />
            <NotificationDisplay

            />
            <NotificationDisplay

            />
             <NotificationDisplay

            />
             <NotificationDisplay

            />
            <NotificationDisplay

            />
            <NotificationDisplay

            />
            <NotificationDisplay

            />
            <NotificationDisplay

            />
            
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            
       </ScrollView>
       <View style={styles.bottomBar}>
        <CustomButton
                icon={search}
                onPress={onProjectSearchPagePressed}
                style={[styles.bottomBarIcon]}
                type="TERTIARY"
        />
        <CustomButton
                icon={project}
                onPress={onMyProjectsPressed}
                style={[styles.bottomBarIcon]}
                type="TERTIARY"
        />
        <CustomButton
                icon={PersonImage}
                onPress={onProfilePressed}
                style={[styles.bottomBarIcon]}
                type="TERTIARY"
        />
        <CustomButton
                icon={MessageImage}
                onPress={onMessagePressed}
                style={[styles.bottomBarIcon]}
                type="TERTIARY"
        />
        <CustomButton
                icon={NotificationImage}
                onPress={onNotificationPressed}
                style={[styles.bottomBarIcon]}
                type="TERTIARY"
        />
       </View>

      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    headBar:{
      backgroundColor: "#2A3950",
      height: 65,
      borderBottomColor:"#111727",
      borderBottomWidth:1,
    },
    headBarText:{
      color: "#FFFFFF",
      fontFamily: "Prompt_500Medium",
      fontSize: 25,
      textAlign: "center",
      marginTop:17,
    },
    backButton:{
      position: 'absolute',
      left: 5,
      width:72,
      top: -2,
      marginLeft:3,
    },
    scrollView: {
      backgroundColor: "#2A3950",
      flex:1,
    },
    container: {
      flex: 1,
      backgroundColor: "#2A3950",
    },
    bottomBar:{
      backgroundColor: "black",
      position: 'absolute',
      bottom:0,
      height: 65,
      width:"100%",
      borderTopColor:"#111727",
      borderTopWidth:1,
      flexDirection:'row',

    },
    bottomBarIcon:{
      marginTop:-4,
      flexDirection:'row',
      flex:1,
    },
    NotificationItem:{
      flexGrow:1,
    },

  });
  
export default Notifications;
