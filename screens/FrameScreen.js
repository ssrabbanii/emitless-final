import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/ellipse-251.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 26,
    height: 26,
  },
  ellipseParent: {
    borderRadius: Border.br_81xl,
    flex: 1,
    width: "100%",
    height: 26,
  },
});

export default FrameScreen;
