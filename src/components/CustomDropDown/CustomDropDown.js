import { Prompt_500Medium } from "@expo-google-fonts/prompt";
import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import ModalSelector from "react-native-modal-selector";

const CustomDropDown = ({ image, textInputValue }) => {
  let index = 0;
  const data = [
    { key: index++, section: true, label: "Fruits" },
    { key: index++, label: "Red Apples" },
    { key: index++, label: "Cherries" },
  ];
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} />
      <ModalSelector
        data={data}
        initValue="Select something yummy!"
        onChange={(option) => {
          alert(`${option.label} (${option.key}) nom nom nom`);
        }}
        style={styles.input}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#2A3950",
            padding: 10,
            color: "#0F6BAC",
          }}
          editable={false}
          placeholder="Select something yummy!"
          value={textInputValue}
        />
      </ModalSelector>
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
