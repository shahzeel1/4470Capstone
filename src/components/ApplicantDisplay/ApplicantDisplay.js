import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground, View,  Dimensions } from "react-native";


import orgImage from "../../../assets/images/book.png";
import CustomButton from "../CustomButton";
import { useNavigation } from "@react-navigation/native";


var windowWidth = Dimensions.get('window').width;

const ApplicantDisplay = ({
    onPress,
    text,
    icon = orgImage,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
    applicant = "Cameron Railton",
    applied = "16 days Ago",
    notificationName = "Message",
    summary = "This is a summary of the message testing the length acasdasd"
  }) => {
      const navigation = useNavigation();
      const onViewPressed = () => {
        navigation.navigate("");
      };
    
    const Category = (props) => <Text style={{fontWeight: 'bold',  color: "white",
    fontFamily: "Prompt_500Medium"}}>{props.children}</Text>

      return (
        <Pressable onPress={onPress} style={[Styles.container]} >
          <Image source={orgImage} style={Styles.image} />
            <View sytle={[Styles.Textbox]}>
              <Text numberOfLines={1}  style={[Styles.senderText]}><Category>{applicant}</Category></Text>
              <Text style={[Styles.MessageText ]}> View Profile </Text>
              <Text numberOfLines={1}  style={[Styles.MessageText ]}></Text>
              <Text numberOfLines={1} style={[Styles.appliedWriting]}>Applied:{applied}</Text>
              <View style={Styles.separator} />
            </View>
        </Pressable>
      );

};

const Styles = StyleSheet.create({
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
    top:22,
    color: "#0F6BAC",
    flexWrap:'wrap',
  },
  notificationTypeText:{
    flexWrap:'wrap',
    fontSize:16,
    left:20,
    top:16,
    color: "#0F6BAC",

  },
  MessageText:{
    fontSize:18,
    left:20,
    top:26,
    color: "#0F6BAC",
    width: windowWidth - 90,
  },
  
  appliedWriting:{
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
  Viewbutton:{

  },

});
//notification item style

//project item style

export default ApplicantDisplay;
