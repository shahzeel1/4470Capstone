import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ResetConfirmation from "../screens/ResetConfirmation";
import SignUpScreen from "../screens/SignUpScreen";
import ClubOrCompany from "../screens/ClubOrCompanyScreen.js/ClubOrCompany";
import ClubSignUpScreen from "../screens/ClubSignUpScreen";
import CompanySignUpScreen from "../screens/CompanySignUpScreen";
import IndividualSignUp from "../screens/IndividualSignUpScreen";
import StudentSignUp from "../screens/IndividualSignUpScreen/StudentSignUpScreen/StudentSignUp";
import FacultySignUp from "../screens/IndividualSignUpScreen/FacultySignUpScreen/FacultySignUp";
import ProfessionalSignUp from "../screens/IndividualSignUpScreen/ProfessionalSignUpScreen/ProfessionalSignUp";
import CreateProject from "../screens/CreateProject";
import ProfilePage from "../screens/ProfilePage";
import Notifications from "../screens/Notifications";
import ProjectSearchPage from "../screens/ProjectSearchPage";
import MessagePage from "../screens/MessagePage";
import MyProjectsPage from "../screens/MyProjectsPage";
import SignUpScreenFirst from "../screens/SignUpScreenFirst";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetConfirmation" component={ResetConfirmation} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpScreenFirst" component={SignUpScreenFirst} />
        <Stack.Screen name="ClubOrCompany" component={ClubOrCompany} />
        <Stack.Screen name="ClubSignUp" component={ClubSignUpScreen} />
        <Stack.Screen name="CompanySignUp" component={CompanySignUpScreen} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="ProjectSearchPage" component={ProjectSearchPage} />
        <Stack.Screen name="Notification" component={Notifications} />
        <Stack.Screen name="IndividualSignUp" component={IndividualSignUp} />
        <Stack.Screen name="CreateProject" component={CreateProject} />
        <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
        <Stack.Screen name="FacultySignUp" component={FacultySignUp} />
        <Stack.Screen
          name="ProfessionalSignUp"
          component={ProfessionalSignUp}
        />
        <Stack.Screen name="MessagePage" component={MessagePage} />
        <Stack.Screen name="MyProjectsPage" component={MyProjectsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
