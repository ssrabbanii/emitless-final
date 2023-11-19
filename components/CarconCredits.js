import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const CarconCredits = () => {
  return (
    <View style={styles.carconCredits}>
      <View style={[styles.property1active, styles.property1activeLayout]}>
        <Image
          style={styles.image53Icon}
          contentFit="cover"
          source={require("../assets/image-5321.png")}
        />
      </View>
      <View style={[styles.property1default, styles.property1activeLayout]}>
        <Image
          style={styles.image53Icon}
          contentFit="cover"
          source={require("../assets/image-5211.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1activeLayout: {
    height: 27,
    width: 27,
    left: 20,
    position: "absolute",
  },
  image53Icon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1active: {
    top: 56,
  },
  property1default: {
    top: 20,
  },
  carconCredits: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 67,
    height: 100,
    overflow: "hidden",
  },
});

export default CarconCredits;
