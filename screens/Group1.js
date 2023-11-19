import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { Color, FontFamily } from "../GlobalStyles";

const Group1 = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={[styles.groupChild, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1266613.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.groupContainer}>
            <View style={[styles.sep20Parent, styles.parentPosition]}>
              <Text style={[styles.sep20, styles.sepTypo]}>Sep 20</Text>
              <Text style={[styles.hkg, styles.hkgTypo]}>HKG</Text>
              <Text style={styles.text}>09:50</Text>
            </View>
            <View style={[styles.sep21Parent, styles.parentPosition]}>
              <Text style={[styles.sep21, styles.sepTypo]}>Sep 21</Text>
              <Text style={[styles.lhr, styles.hkgTypo]}>LHR</Text>
              <Text style={styles.text}>15:38</Text>
            </View>
            <View style={styles.h20mParent}>
              <Text style={[styles.h20m, styles.h20mTypo]}>14h20m</Text>
              <Text style={[styles.business, styles.h20mTypo]}>Business</Text>
              <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
        <View style={styles.arrowUpRightUndefinedGParent}>
          <Image
            style={styles.arrowUpRightUndefinedG}
            contentFit="cover"
            source={require("../assets/arrow-up-right--undefined--glyph-undefined.png")}
          />
          <Text style={[styles.recentItinerary, styles.text3Typo]}>
            <Text style={styles.recentItinerary1}>Recent Itinerary</Text>
            <Text style={styles.text2}>{` `}</Text>
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={styles.carbonEmissionParent}>
            <Text style={[styles.carbonEmission, styles.text3Typo]}>
              Carbon Emission
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text3, styles.text3Typo]}>4.46</Text>
              <Text style={[styles.tonnes, styles.text3Typo]}>TONNES</Text>
            </View>
          </View>
          <RNPButton
            style={styles.frameChild}
            mode="outlined"
            labelStyle={styles.frameButtonBtn}
            contentStyle={styles.frameButtonBtn1}
          >
            Offset
          </RNPButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#fff",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButtonBtn1: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 13,
  },
  groupChildLayout: {
    height: 200,
    width: 346,
  },
  frameParentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: "0.43%",
    height: "99.57%",
    top: "0%",
    position: "absolute",
  },
  sepTypo: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 12,
    height: "23.89%",
    color: Color.colorWhite,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    top: "0%",
    position: "absolute",
  },
  hkgTypo: {
    textAlign: "left",
    fontSize: 16,
    top: "71.1%",
    height: "28.9%",
    color: Color.colorWhite,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    position: "absolute",
  },
  h20mTypo: {
    height: "23.79%",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 12,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
  },
  parentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  groupChild: {
    top: 2,
    left: 0,
    height: 200,
    width: 346,
    position: "absolute",
  },
  sep20: {
    width: "77.41%",
    left: "6.85%",
  },
  hkg: {
    width: "59.63%",
    left: "19.81%",
  },
  text: {
    top: "30.19%",
    fontSize: 19,
    fontFamily: FontFamily.overpassBold,
    color: Color.colorMediumturquoise,
    fontWeight: "700",
    textAlign: "left",
    textTransform: "capitalize",
    left: "0%",
    height: "35.19%",
    position: "absolute",
    width: "100%",
  },
  sep20Parent: {
    width: "18.01%",
    right: "81.99%",
    left: "0%",
  },
  sep21: {
    width: "79.96%",
    left: "17.12%",
  },
  lhr: {
    width: "63.67%",
    left: "23.38%",
  },
  sep21Parent: {
    width: "15.97%",
    left: "84.03%",
    right: "0%",
  },
  h20m: {
    width: "30.61%",
    left: "36.17%",
    color: Color.colorWhite,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    height: "23.79%",
    top: "0%",
  },
  business: {
    width: "35.59%",
    top: "76.07%",
    left: "32.91%",
    fontWeight: "900",
    fontFamily: FontFamily.overpassBlack,
    color: Color.colorGray_100,
  },
  vectorIcon: {
    height: "9.26%",
    top: "43.02%",
    bottom: "47.72%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  h20mParent: {
    height: "100%",
    width: "52.18%",
    right: "23.07%",
    bottom: "0%",
    left: "24.74%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "33.05%",
    width: "7.97%",
    top: "31.05%",
    right: "38.15%",
    bottom: "35.9%",
    left: "53.88%",
  },
  groupContainer: {
    width: "86.68%",
    top: "24.56%",
    right: "6.71%",
    bottom: "40.25%",
    left: "6.62%",
    display: "none",
    height: "35.19%",
    position: "absolute",
  },
  frameParent: {
    height: 200,
    width: 346,
  },
  arrowUpRightUndefinedG: {
    top: 3,
    left: 283,
    width: 20,
    height: 21,
    overflow: "hidden",
    position: "absolute",
  },
  recentItinerary1: {
    fontSize: 20,
  },
  text2: {
    fontSize: 15,
  },
  recentItinerary: {
    width: 184,
    height: 22,
    top: 0,
    left: 0,
    position: "absolute",
  },
  arrowUpRightUndefinedGParent: {
    top: 15,
    left: 21,
    width: 304,
    height: 24,
    position: "absolute",
  },
  carbonEmission: {
    width: 135,
    fontSize: 15,
    height: 24,
  },
  text3: {
    fontSize: 35,
    width: 80,
    height: 39,
  },
  tonnes: {
    fontSize: 7,
    width: 30,
    height: 9,
  },
  parent: {
    marginTop: -10.97,
  },
  carbonEmissionParent: {
    justifyContent: "center",
  },
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 3.99,
    elevation: 3.99,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameGroup: {
    top: 125,
    left: 28,
    width: 290,
    height: 49,
    justifyContent: "space-between",
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    height: 201,
    width: "100%",
  },
});

export default Group1;
