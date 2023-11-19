import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/group-1266642.png")}
      />
      <View style={styles.carbonCreditsParent}>
        <Text style={styles.carbonCredits}>Carbon Credits</Text>
        <Text style={[styles.text, styles.textTypo]}>10,956</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.membershipNumberParent}>
          <Text style={[styles.membershipNumber, styles.textTypo]}>
            Membership Number
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>174 145 ****</Text>
        </View>
        <View style={styles.statusParent}>
          <Text style={[styles.status, styles.textTypo]}>Status</Text>
          <Text style={styles.green}>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: 15,
    height: 22,
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupChild: {
    top: 0,
    left: 0,
    width: 358,
    position: "absolute",
    height: 199,
  },
  carbonCredits: {
    fontSize: 20,
    width: 190,
    height: 22,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    width: 74,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: 15,
  },
  carbonCreditsParent: {
    top: 7,
    left: 21,
    width: 196,
    height: 42,
    justifyContent: "center",
    position: "absolute",
  },
  membershipNumber: {
    width: 187,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: 15,
  },
  text1: {
    letterSpacing: 9.2,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    width: 187,
  },
  membershipNumberParent: {
    width: 187,
    justifyContent: "center",
  },
  status: {
    width: 51,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: 15,
  },
  green: {
    fontSize: 10,
    width: 31,
    height: 11,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  statusParent: {
    width: 53,
    height: 44,
    alignItems: "center",
    marginLeft: 73.81,
    justifyContent: "center",
  },
  frameParent: {
    top: 139,
    left: 22,
    width: 314,
    flexDirection: "row",
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 199,
  },
});

export default Group;
