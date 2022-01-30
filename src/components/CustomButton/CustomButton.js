import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 100,
  },

  container_PRIMARY: {
    backgroundColor: "#C6CEFF",
    alignItems: "center",
  },

  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    color: "#2A3950",
    fontWeight: "600",
    fontSize: 21,
  },

  text_SECONDARY: {
    color: "#3B71F3",
  },

  text_TERTIARY: {
    color: "#C6CEFF",
    fontSize: 15,
    fontFamily: "Prompt_500Medium",
  },
});

export default CustomButton;
