import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";

const MessageDisplay = ({
    onPress,
    text,
    icon,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
  }) => {

    return (
        <Pressable onPress={onPress} style={[NotificationStyles.container,style, ]} >
            <Text style={[NotificationStyles.personWritting]}> Western </Text>
            
        </Pressable>
    );

  };

const NotificationStyles = StyleSheet.create({
        //profile badge, project , club item style
        container: {
          alignItems: "center",
      
          flexDirection: "column",
          flexDirection: "row",
          marginVertical: 5,
          borderColor: "#0F6BAC",
          borderWidth: 2,
          width:"100%",
          height:164,
          borderRadius: 25,
          borderTopWidth:45,
        },
        image: {
          width:160,
          height:140,
          resizeMode: "contain",
          marginVertical: 10,
          flex: 1,
        },
        personWritting:{
          left:0,
          top:-80,
          fontSize:28,
        },
        MessegeContent:{
          fontSize:28,
          color:"white",
          left:-20,
        },
});

export default MessageDisplay;