import { Prompt_500Medium } from "@expo-google-fonts/prompt";
import React, { useState } from "react";
import { render } from "react-dom";
import { View, StyleSheet, Image, TextInput, Text } from "react-native";
import ModalSelector from "react-native-modal-selector";

const CustomDropDown = ({
  image,
  textInputValue,
  options = ["hello", "bye"],
  placeholder = textInputValue,
  answer,
  styleSelect,
  setValue,
  value,
}) => {
  let index = 0;
  const [selection, setSelection] = useState("");
  const data = [{ key: index++, section: true, label: placeholder }];
  for (var i = 0; i < options.length; i++) {
    data.push({ key: i + 1, label: options[i] });
  }
  if (styleSelect == "createPage") {
    return (
      <View style={styles.createProjectContainer}>
        <Image source={image} style={styles.iconCreateProject} />
        <ModalSelector
          data={data}
          onChange={(data) => {
              setValue(data.label);
          }}
          style={styles.input}
        >
          <TextInput
            placeholder={placeholder}
            style={styles.textCreateProject}
            value={value}
            onChangeText={setValue}
            placeholderTextColor={"#0F6BAC"}
          />
        </ModalSelector>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image source={image} style={styles.icon} />
        <ModalSelector
          data={data}
          onChange={(data) => {
              setValue(data.label);
          }}
          style={styles.input}
        >
          <TextInput
            placeholder={placeholder}
            style={styles.textCreateProject}
            value={value}
            onChangeText={setValue}
            placeholderTextColor={"#0F6BAC"}
          />
        </ModalSelector>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  createProjectContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginHorizontal: 14,
    marginVertical: 8,
    borderColor: "#0F6BAC",
    width: 400,
    height: 60,
    borderWidth: 2,
    borderRadius: 25,
    flex: 1,
  },
  input: {
    width: "50%",
    fontFamily: "Prompt_500Medium",
    flex: 3,
  },
  iconCreateProject: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    marginVertical: 10,
    flex: 1,
    marginLeft: 17,
  },
  createPageText: {
    color: "white",
    height: "100%",
    paddingLeft: 10,
    alignItems: "center",
    fontFamily: "Prompt_500Medium",
    flex: 2,
    fontSize: 20,
  },
  textCreateProject: {
    padding: 10,
    color: "white",
    fontFamily: "Prompt_500Medium",
    flex: 2,
    fontSize: 20,
    marginLeft: 16,
  },
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
    width: "50%",
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

export default CustomDropDown;
