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
  Dimensions,
  TouchableHighlight,
  Linking,
} from "react-native";

import PersonImage from "../../../assets/images/user3.png";
import NotificationImage from "../../../assets/images/notification2.png";
import MessageImage from "../../../assets/images/email2.png";
import search from "../../../assets/images/search.png";
import project from "../../../assets/images/book.png";
import school from "../../../assets/images/school.png";
import book from "../../../assets/images/book.png";
import city from "../../../assets/images/city.png";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import CustomItemDisplay from "../../components/CustomItemDisplay";
import IndustryPic from "../../../assets/images/enterprise2.png";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ProfileProjectDisplay from "../../components/ProfileProjectDisplay"; 
import ProfileClubDisplay from  "../../components/ProfileClubDisplay"; 
import ProfileBadgeDisplay from  "../../components/ProfileBadgeDisplay";

const ProjectPage = () => {
  //temporary till we can see if user is a org or not or viewer
  const isProjectOwner = false;
  const isApplied = true;

  var projectName = "facebook project 1";
  var projectOrganization = "Facebook";
  var projectLocation = "London, ON";
  var projectDuration = "1 year Long";
  var projectRoles = ["Software Egineer", "Media Manager"];
  var projectIndustry =  "Social Media";
  var projectDescription = "The description of this project";
  var projectIcon = school;
  var Email = "mailto:" + "FakeBuisness@hotmail.com";

  //getting the initials of the user
  //if(isOrganization == false){

  //navigation pages bottom bar and back
  const navigation = useNavigation();
  const onProjectSearchPagePressed = () => {
    navigation.navigate("ProjectSearchPage");
  };
  const onNotificationPressed = () => {
    navigation.navigate("Notifications");
  };
  const onProfilePressed = () => {
    navigation.navigate("ProfilePage");
  };
  const onMessagePagePressed = () => {
    navigation.navigate("MessagePage");
  };
  const onBackPressed = () => {
    navigation.navigate("ProjectSearchPage");
  };
  const onApplyPressed = () => {
    navigation.navigate("ApplyPage");
  };
  const onEditPressed = () => {
    navigation.navigate();
  };
  const onMyProjectsPage = () => {
    navigation.navigate("MyProjectsPage");
  };

  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (isProjectOwner == false) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.headBar}>
          <View>
            {(() => {
              if(isApplied == false){
                return (
                  <CustomButton
                    text="Apply"
                    onPress={onApplyPressed}
                    type="SECONDARY"
                    style={styles.applyButton}
                  />
                );
              }else
               return (
                <CustomButton
                    text="Applied"
                    type="SECONDARY"
                    style={styles.appliedButton}
                  />

               ) ;
            })()}
          </View>
          <Text style={styles.headBarText}>{projectOrganization}</Text>
          <CustomButton
            text="Back"
            onPress={onBackPressed}
            type="SECONDARY"
            style={styles.backButton}
          />
        </View>
        <ScrollView Style={styles.scrollView}>
          <View style={styles.containerCircle}>
            <View style={styles.CircleShape}>
              <Text style={styles.ProfileCricleText}>{}</Text>
            </View>
          </View>

          <Text style={styles.profileName}>{projectName}</Text>
          <Text style={styles.DescriptionText}>{projectDescription}</Text>

          <View style={styles.separator} />

          <View Style={styles.boxBackground}>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectIndustry}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectDuration}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectLocation}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectRoles}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={MessageImage} style={[styles.infoIcon]} />
              <Pressable onPress={() => Linking.openURL(Email)}>
                <Text style={styles.profileInfoScetionButton}>
                  {Email.substring(7, Email.length)}
                </Text>
              </Pressable>
            </View>

          </View>


          <View style={styles.lastSeperator} />
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
            onPress={onMyProjectsPage}
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
  }
  // if is an ornanization
  else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.headBar}>
          <View>
            {(() => {
              
                return (
                  <CustomButton
                    text="Edit"
                    onPress={onEditPressed}
                    type="SECONDARY"
                    style={styles.editButton}
                  />
                );
              return null;
            })()}
          </View>
          <Text style={styles.headBarText}>{projectOrganization}</Text>
          <CustomButton
            text="Back"
            onPress={onBackPressed}
            type="SECONDARY"
            style={styles.backButton}
          />
        </View>
        <ScrollView Style={styles.scrollView}>
          <View style={styles.containerCircle}>
            <View style={styles.CircleShape}>
              <Text style={styles.ProfileCricleText}>{}</Text>
            </View>
          </View>

          <Text style={styles.profileName}>{projectName}</Text>
          <Text style={styles.DescriptionText}>{projectDescription}</Text>

          <View style={styles.separator} />

          <View Style={styles.boxBackground}>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectIndustry}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectDuration}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectLocation}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={city} style={[styles.infoIcon]} />
              <Text style={styles.profileInfoScetion}>{projectRoles}</Text>
            </View>
            <View style={styles.iconPlusInfoViewBox}>
              <Image source={MessageImage} style={[styles.infoIcon]} />
              <Pressable onPress={() => Linking.openURL(Email)}>
                <Text style={styles.profileInfoScetionButton}>
                  {Email.substring(7, Email.length)}
                </Text>
              </Pressable>
            </View>

          </View>


          <View style={styles.lastSeperator} />
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
            onPress={onMyProjectsPage}
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
  }
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
    marginTop: 8,
  },

  container: {
    flex: 1,
    backgroundColor: "#2A3950",
  },
  boxBackground: {
    backgroundColor: "red",
    flex: 1,
    width: 400,
    height: 300,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#2A3950",
    marginHorizontal: 20,
    alignSelf: "center",
  },
  profilePic: {
    width: 400,
    height: 300,
    alignSelf: "center",
    flex: 1,
    marginTop: 14,
    resizeMode: "contain",
  },
  profileName: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 35,
    textAlign: "center",
    marginTop: -14,
  },
  DescriptionText: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  profileInfoScetion: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 30,
    paddingTop: 20,
    marginBottom: -8,
    flex: 1,
  }, // here cause message ico looks bad with other style
  profileInfoScetionButton: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 30,
    paddingTop: 23,
    marginBottom: -8,
    flex: 1,
  },
  profileCategorySection: {
    color: "#FFFFFF",
    fontFamily: "Prompt_500Medium",
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 30,
    paddingTop: 30,
    marginTop: -12,
    marginBottom: 15,
  },
  separator: {
    backgroundColor: "#EDEDED",
    borderColor: "#EDEDED",
    borderWidth: 0.8,
    flex: 8,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 20,
    marginBottom: -5,
    height: 3,
    borderRadius: 25,
  },
  lastSeperator: {
    backgroundColor: "#EDEDED",
    borderColor: "#EDEDED",
    borderWidth: 0.8,
    flex: 8,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 20,
    marginBottom: 50,
    height: 3,
    borderRadius: 25,
  },
  sideSwippingScrollView: {
    backgroundColor: "#354467",
    height: 225,
    marginLeft: 20,
    marginBottom: 15,
  },
  applyButton: {
    position: "absolute",
    right: 5,
    width: 80,
    top: -2,
    marginRight: 3,
  },
  appliedButton: {
    position: "absolute",
    right: 5,
    width: 99,
    top: -2,
    marginRight: 3,
  },
  editButton: {
    position: "absolute",
    right: 5,
    width: 65,
    top: -2,
    marginRight: 3,
  },
  backButton: {
    position: "absolute",
    left: 5,
    width: 72,
    top: -2,
    marginLeft: 3,
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
  infoIcon: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginRight: -18,
    marginTop: 26,
    resizeMode: "contain",
  },
  iconPlusInfoViewBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  containerCircle: {
    flex: 1,
    marginTop: 32,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A3950",
  },
  CircleShape: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderColor: "white",
    borderWidth: 2,

    borderColor: "white",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  ProfileCricleText: {
    fontSize: 120,
    color: "white",
    alignSelf: "center",
  },
});

export default ProjectPage;

