import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Frame111 = ({ style }) => {
  return (
    <View style={[styles.donationsParent, style]}>
      <Text style={styles.donations}>Donations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  donations: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  donationsParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame111;
