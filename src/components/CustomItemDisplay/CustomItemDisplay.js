import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";




const CustomItemDisplay = ({
    onPress,
    text,
    icon,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
  }) => {
  return (
      <Pressable onPress={onPress} style={[styles.container,style, ]} >
        <ImageBackground source={icon} style={styles.image}>
        <Text style={[styles.bottomWritting]}> Western </Text>
          
          
          </ImageBackground> 
        
      </Pressable>
  );
};

const styles = StyleSheet.create({
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

    alignItems: "center",
    fontSize:28,
  },
});

export default CustomItemDisplay;
