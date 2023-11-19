import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PaymentSuccessful = () => {
  return (
    <View style={styles.paymentSuccessful}>
      <Image
        style={styles.paymentSuccessfulChild}
        contentFit="cover"
        source={require("../assets/ellipse-251.png")}
      />
      <View style={styles.paymentSuccessfulParent}>
        <Text
          style={[styles.paymentSuccessful1, styles.ecoShareParentFlexBox]}
        >{`Payment
Successful`}</Text>
        <View style={[styles.ecoShareParent, styles.ecoShareParentFlexBox]}>
          <Text style={[styles.ecoShare, styles.ecoShareTypo]}>Eco-Share</Text>
          <Image
            style={styles.launchIcon}
            contentFit="cover"
            source={require("../assets/launch19.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ecoShareParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  ecoShareTypo: {
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  paymentSuccessfulChild: {
    top: 10,
    left: 10,
    width: 26,
    height: 26,
    position: "absolute",
  },
  paymentSuccessful1: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    width: 84,
    height: 40,
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  ecoShare: {
    fontSize: 10,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    width: 55,
    height: 12,
    alignItems: "center",
  },
  launchIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 3.99,
  },
  ecoShareParent: {
    flexDirection: "row",
    marginTop: 14,
  },
  paymentSuccessfulParent: {
    top: 36,
    left: 38,
    alignItems: "center",
    position: "absolute",
  },
  paymentSuccessful: {
    borderRadius: Border.br_xl,
    backgroundColor: "#08d3e0",
    width: 160,
    height: 124,
  },
});

export default PaymentSuccessful;
