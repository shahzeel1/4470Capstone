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

import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const ProjectPage = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const onProjectPagePressed = () => {};
  const onBackPressed = () => {
    navigation.navigate("Home");
  };
  const onNotificationPressed = () => {
    navigation.navigate("Notifications");
  };
  const onProfilePressed = () => {
    navigation.navigate("ProfilePage");
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
        <Text style={styles.headBarText}>Project Page</Text>
        <Text>Available projects will be displayed here</Text>
      </View>
      <ScrollView Style={styles.scrollView}></ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          icon={orgImage}
          onPress={onProjectPagePressed}
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
          onPress={onBackPressed}
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
};

const styles = StyleSheet.create({
  headBar: {
    backgroundColor: "#2A3950",
    height: 65,
    borderBottomColor: "#111727",
    borderBottomWidth: 1,
  },
  headBarText: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 25,
    textAlign: "center",
    marginTop: 17,
  },
  backButton: {
    position: "absolute",
    left: 5,
    width: 72,
    top: -2,
    marginLeft: 3,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#2A3950",
    marginHorizontal: 20,
    alignSelf: "center",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#2A3950",
  },
  bottomBar: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    height: 55,
    width: "100%",
    borderTopColor: "#111727",
    borderTopWidth: 1,
    flexDirection: "row",
  },
  bottomBarIcon: {
    marginTop: -4,
    flexDirection: "row",
    flex: 1,
  },
});

export default ProjectPage;
