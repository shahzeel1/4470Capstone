import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground, View,  Dimensions } from "react-native";


import orgImage from "../../../assets/images/book.png";

const MessageDisplay = ({
    onPress,
    text,
    icon = orgImage,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
    sender = "Facebook",
    received = "16 days Ago",
    notificationName = "Message",
    summary = "This is a summary of the message testing the length"
  }) => {

    const Category = (props) => <Text style={{fontWeight: 'bold',  color: "white",
    fontFamily: "Prompt_500Medium"}}>{props.children}</Text>

      return (
        <Pressable onPress={onPress} style={[StylesMessage.container]} >
          <Image source={orgImage} style={StylesMessage.image} />
            <View sytle={[StylesMessage.Textbox]}>
              <Text numberOfLines={1}  style={[StylesMessage.senderText]}><Category>{sender}</Category></Text>

              <Text numberOfLines={1}  style={[StylesMessage.MessageText ]}>{summary}</Text>
              <Text numberOfLines={1} style={[StylesMessage.postedWriting]}>{received}</Text>
              <View style={StylesMessage.separator} />
            </View>
        </Pressable>
      );

};

const StylesMessage = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  Textbox:{
      bottom:0,
  },
  image: {
    width:55,
    height:45,
    resizeMode:'contain',
    top:23,
    left:8,
  },
  senderText:{
    fontSize:20,
    left:20,
    top:16,
    color: "#0F6BAC",
    fontFamily: 'Roboto',
    flexWrap:'wrap',
  },
  notificationTypeText:{
    flexWrap:'wrap',
    fontSize:16,
    left:20,
    top:16,
    color: "#0F6BAC",
    fontFamily: 'Roboto',

  },
  MessageText:{
    fontSize:16,
    left:20,
    top:12,
    color: "#0F6BAC",
    fontFamily: 'Roboto',
    flexWrap:'wrap',
    maxWidth:300,
  },
  
  postedWriting:{
  fontSize:14,
  color: "#0F6BAC",
  textAlign:"right",
  right:-20,
  top:10,
  bottom:-5,
  
  },

  separator: {
    color:"#483d8b",
    borderColor :"#483d8b",
    borderWidth: 1,
    marginLeft:20,
    marginRight:-25,
    bottom:-10,
    height:2,
    borderRadius: 25,
  },


});
//notification item style

//project item style

export default MessageDisplay;
