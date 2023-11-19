import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FrameComponent from "../components/Frame20167777";
import Frame from "../components/Frame";
import { Button as RNPButton } from "react-native-paper";
import { Border, Color, FontFamily } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const HomePage5 = () => {
  return (
    <View style={styles.homePage5}>
      <View style={[styles.rectangleParent, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.viewPosition]} />
        <View style={[styles.wrapper, styles.viewPosition]} />
        <TopTab.Navigator
          style={styles.frameChild}
          tabBar={({ state, descriptors, navigation, position }) => {
            const [activeItems] = React.useState([<Frame />]);
            const [normalItems] = React.useState([<Frame />]);
            const activeIndex = state.index;
            return (
              <View style={styles.topTabBarStyle}>
                {normalItems.map((item, index) => {
                  const isFocused = state.index === index;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        navigation.navigate({
                          name: state.routes[index].name,
                          merge: true,
                        });
                      }}
                    >
                      {activeIndex === index ? activeItems[index] : item}
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          }}
        >
          <TopTab.Screen name="Frame 20167777" component={FrameComponent} />
        </TopTab.Navigator>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.navbarChild, styles.parentPosition1]} />
        <View style={styles.navbarInner}>
          <View style={[styles.homeButtonParent, styles.parentPosition1]}>
            <Image
              style={styles.homeButtonIcon}
              contentFit="cover"
              source={require("../assets/home-button.png")}
            />
            <Image
              style={styles.paymentIcon}
              contentFit="cover"
              source={require("../assets/payment.png")}
            />
            <Image
              style={styles.mapsButtonIcon}
              contentFit="cover"
              source={require("../assets/maps-button.png")}
            />
            <View style={styles.carconCredits}>
              <Image
                style={[styles.image52Icon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/image-52.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent8, styles.groupLayout]}>
        <Image
          style={[styles.groupChild14, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1266641.png")}
        />
        <View style={[styles.carbonCreditsParent, styles.text2Position]}>
          <Text style={[styles.carbonCredits, styles.carbonCreditsTypo]}>
            Carbon Credits
          </Text>
          <Text style={[styles.text9, styles.textTypo]}>10,956</Text>
        </View>
      </View>
      <View style={styles.groupParent9}>
        <Image
          style={[styles.groupChild15, styles.groupChild15Layout]}
          contentFit="cover"
          source={require("../assets/group-1266611.png")}
        />
        <View style={[styles.frameParent15, styles.groupChild15Layout]}>
          <View style={[styles.frameParent15, styles.groupChild15Layout]}>
            <View style={styles.groupParent10}>
              <View style={[styles.sep20Parent, styles.parentPosition]}>
                <Text style={[styles.sep20, styles.sepTypo]}>Sep 20</Text>
                <Text style={[styles.hkg1, styles.lhrTypo]}>HKG</Text>
                <Text style={styles.text10}>09:50</Text>
              </View>
              <View style={[styles.sep21Parent, styles.parentPosition]}>
                <Text style={[styles.sep21, styles.sepTypo]}>Sep 21</Text>
                <Text style={[styles.lhr, styles.lhrTypo]}>LHR</Text>
                <Text style={styles.text10}>15:38</Text>
              </View>
              <View style={[styles.h20mParent, styles.parentPosition1]}>
                <Text style={[styles.h20m, styles.h20mTypo]}>14h20m</Text>
                <Text style={[styles.business, styles.h20mTypo]}>Business</Text>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
          <View style={styles.arrowUpRightUndefinedGParent}>
            <View style={[styles.arrowUpRightUndefinedG, styles.text1Layout]} />
            <Text style={[styles.recentItinerary, styles.carbonCreditsTypo]}>
              <Text style={styles.hkg}>Recent Itinerary</Text>
              <Text style={styles.text12}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.frameParent16, styles.parentFlexBox]}>
            <View style={styles.carbonEmissionParent}>
              <Text style={[styles.carbonEmission, styles.textTypo]}>
                Carbon Emission
              </Text>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={[styles.text13, styles.textTypo]}>4.46</Text>
                <Text style={[styles.tonnes, styles.textTypo]}>TONNES</Text>
              </View>
            </View>
            <RNPButton
              style={styles.frameInner}
              mode="outlined"
              labelStyle={styles.frameButtonBtn}
              contentStyle={styles.frameButtonBtn1}
            >
              Offset
            </RNPButton>
          </View>
        </View>
      </View>
      <View style={styles.frameParent17}>
        <View>
          <Text style={[styles.meiLing, styles.cx237Typo]}>Mei Ling</Text>
          <Text style={[styles.premiumTraveller, styles.ecoShareTypo]}>
            Premium Traveller
          </Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-245.png")}
        />
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text style={[styles.emitless, styles.lhrTypo]}>{`EmitLess `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: "100%",
  },
  topTabBarStyle: {
    position: "absolute",
    top: 25,
    left: 27,
    width: 336,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 30,
    zIndex: 1,
  },
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
  frameItemLayout: {
    height: 471,
    width: 390,
    left: 0,
    position: "absolute",
  },
  viewPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  groupLayout1: {
    height: 94,
    width: 344,
  },
  flightLayout: {
    height: 9,
    fontSize: 7,
  },
  cx237Layout: {
    height: 22,
    width: 74,
  },
  hkgTypo: {
    marginTop: 13.96,
    textAlign: "left",
    color: Color.colorTeal_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupParentLayout: {
    width: 65,
    height: 65,
  },
  textTypo1: {
    height: 11,
    color: Color.colorBlack,
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  ecoShareTypo: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text1Layout: {
    width: 21,
    position: "absolute",
  },
  text2Position: {
    left: 20,
    position: "absolute",
  },
  parentPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 209,
    width: 346,
    position: "absolute",
  },
  carbonCreditsTypo: {
    width: 190,
    color: Color.colorWhite,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  textTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupChild15Layout: {
    height: 200,
    width: 358,
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
    fontSize: 12,
    height: "23.89%",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    color: Color.colorWhite,
    top: "0%",
    position: "absolute",
  },
  lhrTypo: {
    fontSize: 16,
    textAlign: "left",
  },
  h20mTypo: {
    height: "23.79%",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 12,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  cx237Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameItem: {
    backgroundColor: Color.colorWhitesmoke,
    top: 0,
    height: 471,
    width: 390,
    left: 0,
    position: "absolute",
  },
  wrapper: {
    bottom: 2,
    height: 388,
    alignItems: "center",
    left: 22,
    position: "absolute",
  },
  rectangleParent: {
    top: 374,
  },
  navbarChild: {
    backgroundColor: Color.colorPowderblue,
    left: "0%",
    right: "0%",
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  homeButtonIcon: {
    width: 19,
    height: 23,
  },
  paymentIcon: {
    width: 23,
    marginLeft: 75,
    height: 23,
  },
  mapsButtonIcon: {
    width: 25,
    height: 25,
    marginLeft: 75,
  },
  image52Icon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  carconCredits: {
    width: 27,
    height: 27,
    marginLeft: 75,
  },
  homeButtonParent: {
    left: "0%",
    right: "0%",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
  },
  navbarInner: {
    height: "33.33%",
    width: "81.9%",
    top: "27.16%",
    right: "8.87%",
    bottom: "39.51%",
    left: "9.23%",
    position: "absolute",
  },
  navbar: {
    top: 763,
    height: 81,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild14: {
    top: 0,
    left: 0,
  },
  carbonCredits: {
    fontSize: 20,
  },
  text9: {
    fontSize: 15,
    height: 22,
    width: 74,
  },
  carbonCreditsParent: {
    top: 7,
    justifyContent: "center",
  },
  groupParent8: {
    top: 121,
    left: 22,
  },
  groupChild15: {
    top: 2,
  },
  sep20: {
    width: "77.28%",
    left: "6.98%",
  },
  hkg1: {
    width: "59.57%",
    left: "19.68%",
    top: "71.1%",
    height: "28.9%",
    fontSize: 16,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    color: Color.colorWhite,
    position: "absolute",
  },
  text10: {
    top: "30.19%",
    fontSize: 19,
    fontFamily: FontFamily.overpassBold,
    color: Color.colorMediumturquoise,
    textTransform: "capitalize",
    height: "35.19%",
    left: "0%",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    width: "100%",
  },
  sep20Parent: {
    width: "18.01%",
    right: "81.99%",
    left: "0%",
  },
  sep21: {
    width: "80%",
    left: "17.17%",
  },
  lhr: {
    width: "63.64%",
    left: "23.43%",
    top: "71.1%",
    height: "28.9%",
    fontSize: 16,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    color: Color.colorWhite,
    position: "absolute",
  },
  sep21Parent: {
    width: "15.95%",
    left: "84.05%",
    right: "0%",
  },
  h20m: {
    width: "30.57%",
    left: "36.2%",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    height: "23.79%",
    color: Color.colorWhite,
    top: "0%",
  },
  business: {
    width: "35.64%",
    top: "76.07%",
    left: "32.92%",
    fontWeight: "900",
    fontFamily: FontFamily.overpassBlack,
    color: Color.colorGray_100,
  },
  vectorIcon: {
    height: "9.26%",
    top: "43.02%",
    bottom: "47.72%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  h20mParent: {
    width: "52.18%",
    right: "23.07%",
    left: "24.75%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "34.05%",
    width: "7.73%",
    top: "31.05%",
    right: "46.12%",
    bottom: "34.9%",
    left: "46.15%",
  },
  groupParent10: {
    width: "86.68%",
    top: "24.56%",
    right: "6.7%",
    bottom: "40.25%",
    left: "6.62%",
    height: "35.19%",
    position: "absolute",
  },
  frameParent15: {
    top: 0,
  },
  arrowUpRightUndefinedG: {
    top: 3,
    left: 293,
    height: 21,
    overflow: "hidden",
  },
  hkg: {
    fontSize: 20,
  },
  text12: {
    fontSize: 15,
  },
  recentItinerary: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  arrowUpRightUndefinedGParent: {
    top: 15,
    width: 314,
    height: 24,
    left: 22,
    position: "absolute",
  },
  carbonEmission: {
    width: 135,
    height: 24,
    fontSize: 15,
  },
  text13: {
    fontSize: 35,
    width: 80,
    height: 39,
  },
  tonnes: {
    width: 30,
    height: 9,
    fontSize: 7,
  },
  parent: {
    marginTop: -10.97,
  },
  carbonEmissionParent: {
    justifyContent: "center",
  },
  frameInner: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 3.99,
    elevation: 3.99,
    shadowOpacity: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameParent16: {
    top: 125,
    left: 29,
    width: 300,
    height: 49,
    justifyContent: "space-between",
    position: "absolute",
  },
  groupParent9: {
    top: 173,
    left: 16,
    height: 201,
    width: 358,
    position: "absolute",
  },
  meiLing: {
    fontSize: 24,
    width: 156,
    height: 27,
  },
  premiumTraveller: {
    marginTop: 3.99,
  },
  ellipseIcon: {
    width: 45,
    height: 45,
    marginLeft: 144.63,
  },
  frameParent17: {
    top: 72,
    right: 23,
    width: 345,
    height: 46,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  frameChild1: {
    height: 26,
    width: 26,
  },
  emitless: {
    marginLeft: 2.99,
    color: Color.colorTeal_100,
    fontSize: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  ellipseParent: {
    top: 43,
    width: 101,
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    left: 22,
    position: "absolute",
  },
  homePage5: {
    backgroundColor: Color.colorWhite,
    height: 1500,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomePage5;
