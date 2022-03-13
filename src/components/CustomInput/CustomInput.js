import { Prompt_500Medium } from "@expo-google-fonts/prompt";
import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  image,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"#0F6BAC"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "14%",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginVertical: 5,
    borderColor: "#0F6BAC",
    borderWidth: 2,
    borderRadius: 25,
  },
  input: {
    color: "white",
    height: "100%",
    paddingLeft: 10,
    fontFamily: "Prompt_500Medium",
    flex: 3,
  },
  icon: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    marginVertical: 10,
    flex: 1,
  },
});

export default CustomInput;
