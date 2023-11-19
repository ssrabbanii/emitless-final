import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const SustainableDevelopmentGoals14 = () => {
  return (
    <ImageBackground
      style={styles.sustainableDevelopmentGoalsIcon}
      resizeMode="cover"
      source={require("../assets/sustainabledevelopmentgoals2.png")}
    />
  );
};

const styles = StyleSheet.create({
  sustainableDevelopmentGoalsIcon: {
    width: 40,
    height: 40,
  },
});

export default SustainableDevelopmentGoals14;
