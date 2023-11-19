import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const SustainableDevelopmentGoals11 = () => {
  return (
    <ImageBackground
      style={styles.sustainableDevelopmentGoalsIcon}
      resizeMode="cover"
      source={require("../assets/sustainabledevelopmentgoals15.png")}
    />
  );
};

const styles = StyleSheet.create({
  sustainableDevelopmentGoalsIcon: {
    width: 40,
    height: 40,
  },
});

export default SustainableDevelopmentGoals11;
