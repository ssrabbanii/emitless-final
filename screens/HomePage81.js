import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FrameComponent1 from "../components/Frame2016453534";
import Frame2 from "../components/Frame2";
import FrameComponent from "../components/Frame20167777";
import Frame111 from "../components/Frame11";
import { Image } from "expo-image";
import { Button as RNPButton } from "react-native-paper";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const HomePage81 = () => {
  return (
    <View style={styles.homePage8}>
      <View style={[styles.rectangleParent, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemPosition]} />
        <TopTab.Navigator style={styles.frameChild}>
          <TopTab.Screen
            name="Frame 2016453534"
            component={FrameComponent1}
            options={{
              tabBarIcon: () => <Frame2 />,
            }}
          />
          <TopTab.Screen
            name="Frame 20167777"
            component={FrameComponent}
            options={{
              tabBarIcon: () => <Frame111 />,
            }}
          />
        </TopTab.Navigator>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.navbarChild, styles.parentPosition2]} />
        <View style={styles.navbarInner}>
          <View style={[styles.homeButtonParent, styles.parentPosition2]}>
            <Image
              style={styles.homeButtonIcon}
              contentFit="cover"
              source={require("../assets/home-button1.png")}
            />
            <Image
              style={styles.paymentIcon}
              contentFit="cover"
              source={require("../assets/payment3.png")}
            />
            <Image
              style={styles.mapsButtonIcon}
              contentFit="cover"
              source={require("../assets/maps-button2.png")}
            />
            <View style={styles.carconCredits}>
              <Image
                style={[styles.image52Icon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/image-521.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1266613.png")}
        />
        <View style={[styles.frameParent, styles.groupChildLayout]}>
          <View style={[styles.frameParent, styles.groupChildLayout]}>
            <View style={styles.groupContainer}>
              <View style={[styles.sep20Parent, styles.parentPosition1]}>
                <Text style={[styles.sep20, styles.sepTypo]}>Sep 20</Text>
                <Text style={[styles.hkg, styles.hkgTypo]}>HKG</Text>
                <Text style={styles.text}>09:50</Text>
              </View>
              <View style={[styles.sep21Parent, styles.parentPosition1]}>
                <Text style={[styles.sep21, styles.sepTypo]}>Sep 21</Text>
                <Text style={[styles.lhr, styles.hkgTypo]}>LHR</Text>
                <Text style={styles.text}>15:38</Text>
              </View>
              <View style={[styles.h20mParent, styles.parentPosition2]}>
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
                source={require("../assets/vector111.png")}
              />
            </View>
          </View>
          <View
            style={[styles.arrowUpRightUndefinedGParent, styles.parentPosition]}
          >
            <Image
              style={styles.arrowUpRightUndefinedG}
              contentFit="cover"
              source={require("../assets/arrow-up-right--undefined--glyph-undefined2.png")}
            />
            <Text style={[styles.recentItinerary, styles.textLayout]}>
              <Text style={styles.recentItinerary1}>Recent Itinerary</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.parentFlexBox]}>
            <View style={styles.carbonEmissionParent}>
              <Text style={[styles.carbonEmission, styles.textTypo]}>
                Carbon Emission
              </Text>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={[styles.text3, styles.textTypo]}>4.46</Text>
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
      <View style={[styles.groupView, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1266642.png")}
        />
        <View style={[styles.carbonCreditsParent, styles.parentPosition]}>
          <Text style={[styles.carbonCredits, styles.textLayout]}>
            Carbon Credits
          </Text>
          <Text style={[styles.text4, styles.textLayout]}>10,956</Text>
        </View>
        <View style={[styles.frameContainer, styles.ellipseParentPosition]}>
          <View style={styles.membershipNumberParent}>
            <Text style={[styles.membershipNumber, styles.textLayout]}>
              Membership Number
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>174 145 ****</Text>
          </View>
          <View style={styles.statusParent}>
            <Text style={[styles.status, styles.textLayout]}>Status</Text>
            <Text style={[styles.green, styles.greenTypo]}>Green</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View>
          <Text style={[styles.meiLing, styles.textTypo]}>Mei Ling</Text>
          <Text style={[styles.premiumTraveller, styles.greenTypo]}>
            Premium Traveller
          </Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-2453.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require("../assets/ellipse-2511.png")}
        />
        <Text style={[styles.emitless, styles.textTypo]}>{`EmitLess `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: "100%",
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
  },
  frameItemPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  parentPosition2: {
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
  groupChildLayout: {
    height: 200,
    width: 346,
    left: 0,
    position: "absolute",
  },
  parentPosition1: {
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
  parentPosition: {
    left: 21,
    position: "absolute",
  },
  textLayout: {
    height: 22,
    textAlign: "left",
    color: Color.colorWhite,
  },
  parentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout: {
    height: 199,
    width: 358,
    position: "absolute",
  },
  ellipseParentPosition: {
    left: 22,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  greenTypo: {
    fontSize: 10,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  frameItem: {
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
    height: 471,
    width: 390,
  },
  rectangleParent: {
    marginLeft: -195,
    top: 374,
    left: "50%",
    position: "absolute",
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
    flexDirection: "row",
    left: "0%",
    right: "0%",
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
    left: 0,
    width: 390,
    position: "absolute",
  },
  groupChild: {
    top: 2,
  },
  sep20: {
    width: "77.41%",
    left: "6.85%",
  },
  hkg: {
    width: "59.63%",
    left: "19.81%",
    textAlign: "left",
    top: "71.1%",
    height: "28.9%",
    fontSize: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    position: "absolute",
  },
  text: {
    top: "30.19%",
    fontSize: 19,
    fontFamily: FontFamily.overpassBold,
    color: Color.colorMediumturquoise,
    fontWeight: "700",
    textAlign: "left",
    textTransform: "capitalize",
    height: "35.19%",
    left: "0%",
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
    textAlign: "left",
    top: "71.1%",
    height: "28.9%",
    fontSize: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    position: "absolute",
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
    left: "0%",
    right: "0%",
    width: "100%",
  },
  h20mParent: {
    width: "52.18%",
    right: "23.07%",
    left: "24.74%",
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
    top: 0,
  },
  arrowUpRightUndefinedG: {
    top: 3,
    left: 283,
    width: 20,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  recentItinerary1: {
    fontSize: 20,
  },
  text2: {
    fontSize: 15,
  },
  recentItinerary: {
    width: 184,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  arrowUpRightUndefinedGParent: {
    top: 15,
    width: 304,
    height: 24,
  },
  carbonEmission: {
    width: 135,
    fontSize: 15,
    height: 24,
    textAlign: "left",
    color: Color.colorWhite,
  },
  text3: {
    fontSize: 35,
    width: 80,
    height: 39,
    textAlign: "left",
    color: Color.colorWhite,
  },
  tonnes: {
    fontSize: 7,
    width: 30,
    height: 9,
    textAlign: "left",
    color: Color.colorWhite,
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
    top: 121,
    height: 201,
    width: 346,
    left: 22,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  carbonCredits: {
    width: 190,
    fontSize: 20,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text4: {
    width: 74,
    fontSize: 15,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  carbonCreditsParent: {
    top: 7,
    width: 196,
    height: 42,
    justifyContent: "center",
  },
  membershipNumber: {
    width: 187,
    fontSize: 15,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text5: {
    fontSize: FontSize.size_smi,
    letterSpacing: 8.5,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    width: 187,
  },
  membershipNumberParent: {
    width: 187,
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    width: 51,
    fontSize: 15,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  green: {
    width: 31,
    height: 11,
    color: Color.colorWhite,
  },
  statusParent: {
    width: 53,
    height: 44,
    marginLeft: 73.81,
    alignItems: "center",
    justifyContent: "center",
  },
  frameContainer: {
    top: 139,
    width: 314,
    alignItems: "center",
    justifyContent: "center",
  },
  groupView: {
    top: 175,
    left: 16,
  },
  meiLing: {
    fontSize: 24,
    width: 156,
    textAlign: "left",
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
  frameView: {
    top: 72,
    right: 23,
    width: 345,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameChild1: {
    width: 26,
    height: 26,
  },
  emitless: {
    color: Color.colorTeal_100,
    marginLeft: 2.99,
    textAlign: "left",
    fontSize: 16,
  },
  ellipseParent: {
    top: 43,
    width: 101,
    height: 26,
    alignItems: "center",
  },
  homePage8: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage81;
