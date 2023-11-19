import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Payment = () => {
  return (
    <View style={styles.payment}>
      <Image
        style={[styles.property1activeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1active.png")}
      />
      <Image
        style={[styles.property1defaultIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1default.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 23,
    width: 23,
    left: 20,
    position: "absolute",
  },
  property1activeIcon: {
    top: 57,
  },
  property1defaultIcon: {
    top: 20,
  },
  payment: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 63,
    height: 100,
    overflow: "hidden",
  },
});

export default Payment;
