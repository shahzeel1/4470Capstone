import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground, View,  Dimensions } from "react-native";


import orgImage from "../../../assets/images/book.png";

const ProfileProjectDisplay = ({
    onPress,
    text,
    icon = orgImage,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
    description = "Summarry of the projemight need to hadle the problem if sdafdsf   dsf sdf  dsfsdf dfs sdf sdf dsf  sdfdsf sdf ds sd dsf this text is too lon",
    location = "London, ON",
    duration = "1 Year",
    projectName = "Name of project exe",
    role = "Software Engineer",
    joined = "06/07/2022",
    Organization= "Western University",
    status= "finished",

  }) => {

    var newLine = '\n';
    const Category = (props) => <Text style={{fontWeight: 'bold',  color: "white",
    fontFamily: "Prompt_500Medium"}}>{props.children}</Text>
 
    if(status != 'finished'){
 
    return (



    <Pressable onPress={onPress} style={[Styles.container]} >
      <Image source={orgImage} style={Styles.image} />
        <View sytle={[Styles.Textbox]}>
          <Text numberOfLines={2}  style={[Styles.writting ]}><Category>{Organization}</Category></Text>
          <Text numberOfLines={2}  style={[Styles.writting ]}><Category>{projectName}</Category></Text>
          <Text numberOfLines={1} style={[Styles.smallerWriting]}>Role: {role}</Text>
          <Text numberOfLines={2}  style={[Styles.smallerWriting]}>{location}</Text>          
          <Text  numberOfLines={1} style={[Styles.smallerWriting]}>{duration}</Text>
          <Text  numberOfLines={1} style={[Styles.joinedWriting]}>Joined project on:{joined} </Text>
          <View style={Styles.separator} />
        </View>
     
    </Pressable>
  );
  }
  else{
    return (
        <Pressable onPress={onPress} style={[Styles.container]} >
          <Image source={orgImage} style={Styles.image} />
            <View sytle={[Styles.Textbox]}>
              <Text numberOfLines={2}  style={[Styles.writting ]}><Category>{Organization}</Category></Text>
              <Text numberOfLines={2}  style={[Styles.writting ]}><Category>{projectName}</Category></Text>
              <Text  numberOfLines={1} style={[Styles.smallerWriting]}>Role: {role}</Text>
              <Text numberOfLines={2}  style={[Styles.smallerWriting]}>{location}</Text>          
              <Text  numberOfLines={1} style={[Styles.smallerWriting]}>{duration}</Text>
              <Text  numberOfLines={1} style={[Styles.joinedWriting]}>Finished project on:{joined} </Text>
              
            </View>
            <View style={Styles.separator} />
         
        </Pressable>
      );
  }
};

const Styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  image: {
    width:90,
    height:75,
    resizeMode:'contain',
    top:6,
    left:8,
    marginRight:10,
  },
  writting:{
    top:16,
    fontSize:22,
    left:10,
    color: "#0F6BAC",
    flexWrap:'wrap',
  },
  smallerWriting:{
    top:18,
    flexWrap:'wrap',
    fontSize:20,
    left:10,
    color: "#0F6BAC",
  },
  joinedWriting:{
  top:16,
  fontSize:16,
  left:10,
  color: "#0F6BAC",
  },
  separator: {
    color:"#483d8b",
    backgroundColor :"#483d8b",
    borderColor: "#483d8b",
    borderWidth: 1,
    top:10,
    left:10,
    marginRight:20,
    marginLeft:20,
    height:210,
    width:3,
    borderRadius: 25,
  },
});
//notification item style

//project item style

export default ProfileProjectDisplay;
