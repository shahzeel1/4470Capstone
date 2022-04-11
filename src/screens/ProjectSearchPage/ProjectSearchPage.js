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
import NotificationImage from "../../../assets/images/notification2.png";
import MessageImage from "../../../assets/images/email2.png";
import search from "../../../assets/images/search3.png";
import project from "../../../assets/images/book.png";
import { auth } from "../../../firebase.js";
import SearchProjectDisplay from "../../components/SearchProjectDisplay";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";
import { render } from "react-dom";
import { WaitingfortheSunrise_400Regular } from "@expo-google-fonts/dev";
const ProjectSearchPage = () => {
  // const [waitingForData, setWaitingForData] = React.useState(true);
  const [projectsPrint, setProjectsPrint] = useState("");

  const getData = () => {
    var projectLoopPrint = [];
    const database = getDatabase();
    const projectsRef = ref(database, "Projects");
    onValue(projectsRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        console.log("here");
        console.log(item);
        item.key = childSnapshot.key;
        projectLoopPrint.push(
          <SearchProjectDisplay
            key={childSnapshot.key}
            location={childSnapshot.val().location}
            duration={childSnapshot.val().duration}
            projectName={childSnapshot.val().name}
            posted={childSnapshot.val().posted}
            roles={childSnapshot.val().roles}
            Organization={childSnapshot.val().Organization}
          />
        );
      });
      //setWaitingForData(React.useState(false));
    });
    console.log(projectLoopPrint);
    return projectLoopPrint;
  };

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const onProjectSearchPagePressed = () => {};
  const onBackPressed = () => {};

  const onNotificationPressed = () => {
    navigation.navigate("Notifications");
  };
  const onProfilePressed = () => {
    navigation.navigate("ProfilePage");
  };
  const onMessagePagePressed = () => {
    navigation.navigate("MessagePage");
  };
  const onMyProjectsPagePressed = () => {
    navigation.navigate("MyProjectsPage");
  };

  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //connect db

  //get all project in a an array of SearchProjectDisplay
  let projects = getData();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.headBar}>
        <Text style={styles.headBarText}>Project Search</Text>
      </View>

      <ScrollView Style={styles.scrollView}>
        {projects}

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
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
          onPress={onMyProjectsPagePressed}
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
          onPress={onMessagePagePressed}
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
    top: 17,
  },
  backButton: {
    position: "absolute",
    left: 5,
    width: 72,
    top: -2,
    marginLeft: 3,
  },
  scrollView: {
    backgroundColor: "#2A3950",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#2A3950",
  },
  bottomBar: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    height: 65,
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
  gap: {
    height: 65,
  },
  ProjectItem: {
    flexGrow: 1,
  },
});

export default ProjectSearchPage;
