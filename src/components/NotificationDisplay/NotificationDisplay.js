import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground, View,  Dimensions } from "react-native";


import orgImage from "../../../assets/images/book.png";

var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;
const NotificationDisplay = ({
    onPress,
    text,
    icon = orgImage,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
   duration = "1 Year",
    sender = "Facebook",
    received = "16 days Ago",
    notificationType = "General",
    notificationName = "Application Accepted",
    summary = "This is a summary of the message testing the length"

  }) => {

    const Category = (props) => <Text style={{fontWeight: 'bold',  color: "white",
    fontFamily: "Prompt_500Medium"}}>{props.children}</Text>
    if(notificationType == 'Message'){
      return (
        <Pressable onPress={onPress} style={[StylesMessage.container]} >
          <Image source={orgImage} style={StylesMessage.image} />
            <View sytle={[StylesMessage.Textbox]}>
              <Text numberOfLines={1}  style={[StylesMessage.senderText]}><Category>{sender}</Category></Text>
              <Text numberOfLines={1}  style={[StylesMessage.notificationTypeText ]}><Category>{notificationName}</Category></Text>
              <Text numberOfLines={1}  style={[StylesMessage.MessageText ]}>{summary}</Text>
              <Text numberOfLines={1} style={[StylesMessage.postedWriting]}>{received}</Text>
              <View style={StylesMessage.separator} />
            </View>
        </Pressable>
      );
    }
    else if(notificationType == 'General'){
      return (
        <Pressable onPress={onPress} style={[StyleGeneral.container]} >
          <Image source={orgImage} style={StyleGeneral.image} />
            <View sytle={[StyleGeneral.Textbox]}>
              <Text numberOfLines={1}  style={[StyleGeneral.notificationTypeText ]}><Category>{notificationName}</Category></Text>
              <Text numberOfLines={1}  style={[StyleGeneral.senderText]}><Category>{sender}</Category></Text>
              <Text numberOfLines={1}  style={[StylesMessage.MessageText ]}></Text>
              <Text numberOfLines={1} style={[StyleGeneral.postedWriting]}>{received}</Text>
              <View style={StyleGeneral.separator} />
            </View>
        </Pressable>
      );
    }

};

const StylesMessage = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  Textbox:{
      bottom:0,
  },
  image: {
    width:60,
    height:45,
    resizeMode:'contain',
    top:23,
    left:8,
  },
  senderText:{
    fontSize:20,
    left:20,
    top:6,
    color: "#0F6BAC",
    flexWrap:'wrap',
    width: windowWidth - 100,
  },
  notificationTypeText:{
    flexWrap:'wrap',
    fontSize:16,
    left:20,
    top:6,
    color: "#0F6BAC",
    width: windowWidth - 120,
  },
  MessageText:{
    fontSize:16,
    left:20,
    top:6,
    color: "#0F6BAC",
    flexWrap:'wrap',
    width: windowWidth - 140,
  },
  
  postedWriting:{
  fontSize:14,
  color: "#0F6BAC",
  textAlign:"right",
  right:-26,
  bottom:-5,
  },

  separator: {
    color:"#483d8b",
    borderColor :"#483d8b",
    borderWidth: 1,
    marginLeft:20,
    marginRight:-30,
    bottom:-7,
    height:2,
    borderRadius: 25,
  },


});
const StyleGeneral = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  Textbox:{
      bottom:0,
  },
  image: {
    width:60,
    height:45,
    resizeMode:'contain',
    top:23,
    left:8,
  },
  senderText:{
    fontSize:18,
    left:20,
    top:22,
    color: "#0F6BAC",
    flexWrap:'wrap',
    width: windowWidth - 100,
  },
  notificationTypeText:{
    flexWrap:'wrap',
    fontSize:19,
    left:20,
    top:20,
    color: "#0F6BAC",
    width: windowWidth - 120,
  },
  MessageText:{
    fontSize:16,
    left:20,
    top:6,
    color: "#0F6BAC",
    flexWrap:'wrap',
    width: windowWidth - 140,
  },
  
  postedWriting:{
  fontSize:14,
  color: "#0F6BAC",
  textAlign:"right",
  right:-26,
  bottom:-5,
  },

  separator: {
    color:"#483d8b",
    borderColor :"#483d8b",
    borderWidth: 1,
    marginLeft:20,
    marginRight:-30,
    bottom:-7,
    height:2,
    borderRadius: 25,
  },



});
//notification item style

//project item style

export default NotificationDisplay;
