import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image } from "react-native";

const CustomButton = ({
  onPress,
  text,
  icon,
  type = "PRIMARY",
  bgColor,
  fgColor,
  style,
}) => {
  if (!icon) {
    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
          { borderRadius: 100 },
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
  } else {
    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
          { borderRadius: 25 },
          style,
        ]}
      >
        <Image source={icon} style={styles.icon} />
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
    marginVertical: 5,

    alignItems: "center",
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
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default CustomButton;
