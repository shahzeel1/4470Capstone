import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";

const SearchProjectDisplay = ({
    onPress,
    text,
    icon,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
  }) => {
  return (
      <Pressable onPress={onPress} style={[ProfileStyles.container,style, ]} >
        <ImageBackground source={icon} style={ProfileStyles.image}>
          <Text style={[ProfileStyles.bottomWritting]}> Western </Text>
          
        </ImageBackground> 
        
      </Pressable>
  );
};

const ProfileStyles = StyleSheet.create({
  //profile badge, project , club item style
  container: {
    width: "100%",
    alignItems: "center",
    height:200,
    paddingHorizontal: 10,
    flexDirection: "row",
    marginVertical: 5,
    borderColor: "#0F6BAC",
    borderWidth: 2,
    borderRadius: 25,
    marginLeft:16,
    flex:1,
    borderBottomWidth:40,
  },
  image: {
    width:160,
    height:140,
    resizeMode: "contain",
    marginVertical: 10,
    flex: 1,
  },
  bottomWritting:{
    bottom:-152,
    right:-24,
    alignItems: "center",
    fontSize:28,
  },
});
//notification item style

//project item style

export default SearchProjectDisplay;