import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const HomeButton = () => {
  return (
    <View style={styles.homeButton}>
      <Image
        style={[styles.inactiveactiveIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/inactiveactive.png")}
      />
      <Image
        style={[styles.inactivedefaultIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/home-button1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 23,
    width: 19,
    left: 20,
    position: "absolute",
  },
  inactiveactiveIcon: {
    top: 53,
  },
  inactivedefaultIcon: {
    top: 20,
  },
  homeButton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 59,
    height: 100,
    overflow: "hidden",
  },
});

export default HomeButton;
