import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Frame11 = () => {
  return (
    <View style={styles.activityParent}>
      <Text style={styles.activity}>Activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activity: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  activityParent: {
    flex: 1,
    width: "100%",
    height: 30,
    overflow: "hidden",
  },
});

export default Frame11;
