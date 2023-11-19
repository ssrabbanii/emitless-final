import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const SustainableDevelopmentGoals4 = () => {
  return (
    <ImageBackground
      style={styles.sustainableDevelopmentGoalsIcon}
      resizeMode="cover"
      source={require("../assets/sustainabledevelopmentgoals6.png")}
    />
  );
};

const styles = StyleSheet.create({
  sustainableDevelopmentGoalsIcon: {
    width: 40,
    height: 40,
  },
});

export default SustainableDevelopmentGoals4;
