import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const MapsButton = () => {
  return (
    <View style={styles.mapsButton}>
      <Image
        style={[styles.property1activeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1active1.png")}
      />
      <Image
        style={[styles.property1defaultIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1default1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 25,
    width: 25,
    left: 20,
    position: "absolute",
  },
  property1activeIcon: {
    top: 55,
  },
  property1defaultIcon: {
    top: 20,
  },
  mapsButton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 65,
    height: 100,
    overflow: "hidden",
  },
});

export default MapsButton;
