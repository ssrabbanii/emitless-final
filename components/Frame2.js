import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Frame2 = ({ style }) => {
  return (
    <View style={[styles.activityParent, style]}>
      <Text style={styles.activity}>Activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activity: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  activityParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame2;
