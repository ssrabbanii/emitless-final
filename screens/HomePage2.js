import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FrameComponent1 from "../components/Frame2016453534";
import Frame2 from "../components/Frame2";
import FrameComponent from "../components/Frame20167777";
import Frame from "../components/Frame";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const HomePage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage2}>
      <View style={[styles.rectangleParent, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.viewPosition]} />
        <View style={[styles.wrapper, styles.viewPosition]} />
        <TopTab.Navigator screenOptions={{
    tabBarStyle: { backgroundColor: Color.colorWhitesmoke },
  }} style={[styles.barStyle]} tabBarOptions={{
    indicatorStyle: {
      backgroundColor: null,
    },
  }}>
          <TopTab.Screen
            name= "Flights"
            component={FrameComponent1}
            
          />
          <TopTab.Screen
            name="Projects"
            component={FrameComponent}
            
          />
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
      <Pressable
        style={[styles.homepage2Inner, styles.groupParent9Layout]}
        onPress={() => navigation.navigate("HomePage7")}
      >
        <View style={[styles.groupParent9, styles.groupParent9Layout]}>
          <Pressable
            style={[styles.groupParent9, styles.groupParent9Layout]}
            onPress={() => navigation.navigate("HomePage7")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-126664.png")}
            />
          </Pressable>
          <View style={styles.frameParent17}>
            <Pressable
              style={[styles.carbonCreditsParent, styles.groupParentPosition]}
              onPress={() => navigation.navigate("HomePage7")}
            >
              <Text style={[styles.carbonCredits, styles.carbonCreditsTypo]}>
                Retired Carbon Credits
              </Text>
              <Text style={[styles.text10, styles.textTypo]}>10.956</Text>
            </Pressable>
            
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.homepage2Child, styles.groupParent10Layout]}
        onPress={() => navigation.navigate("Itinerary")}
      >
        <View style={[styles.groupParent10, styles.groupParent10Layout]}>
          <Image
            style={[styles.groupChild15, styles.groupChild15Layout]}
            contentFit="cover"
            source={require("../assets/group-126661.png")}
          />
          <View style={[styles.frameParent18, styles.groupChild15Layout]}>
            <View style={[styles.frameParent18, styles.groupChild15Layout]}>
              <View style={styles.groupParent11}>
                <View style={[styles.sep20Parent, styles.parentPosition]}>
                  <Text style={[styles.sep20, styles.sepTypo]}>Sep 20</Text>
                  <Text style={[styles.hkg, styles.hkgTypo]}>HKG</Text>
                  <Text style={styles.text11}>09:50</Text>
                </View>
                <View style={[styles.sep21Parent, styles.parentPosition]}>
                  <Text style={[styles.sep21, styles.sepTypo]}>Sep 21</Text>
                  <Text style={[styles.lhr, styles.hkgTypo]}>LHR</Text>
                  <Text style={styles.text11}>15:38</Text>
                </View>
                <View style={[styles.h20mParent, styles.parentPosition1]}>
                  <Text style={[styles.h20m, styles.h20mTypo]}>14h20m</Text>
                  <Text style={[styles.business, styles.h20mTypo]}>
                    Business
                  </Text>
                  <Image
                    style={[styles.vectorIcon, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
            </View>
            <View style={styles.frameParent19}>
              {/*<Button
                title="Show"
                radius={5}
                iconPosition="left"
                type="solid"
                color="#005d63"
                titleStyle={styles.frameButton1Btn}
                onPress={() => navigation.navigate("Itinerary")}
                containerStyle={styles.frameButton1Btn1}
                buttonStyle={styles.frameButton1Btn2}
        />*/}
              <Text style={[styles.recentItinerary, styles.carbonCreditsTypo]}>
                <Text style={styles.recentItinerary1}>Recent Itinerary</Text>
                <Text style={styles.text13}>{` `}</Text>
              </Text>
            </View>
            <View style={[styles.frameParent20, styles.parentFlexBox]}>
              <View style={styles.carbonEmissionParent}>
                <Text style={[styles.carbonEmission, styles.textTypo]}>
                  Carbon Emission
                </Text>
                <View style={[styles.parent, styles.parentFlexBox]}>
                  <Text style={[styles.text14, styles.textTypo]}>4.46</Text>
                  <Text style={[styles.tonnes, styles.textTypo]}>TONNES</Text>
                </View>
              </View>
              <Button
                
                title="Offset"
                radius={15}
                iconPosition="left"
                type="solid"
                color="rgba(0, 93, 99, 1)"
                titleStyle={styles.frameButton2Btn}
                onPress={() => navigation.navigate("HomePage9")}>
                  
                </Button>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={styles.frameParent21}>
        <View>
          <Text style={[styles.meiLing, styles.uaeTypo]}>Mei Lin</Text>
          <Text style={[styles.premiumTraveller, styles.textTypo1]}>
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
        <Text style={[styles.emitless, styles.hkgTypo]}>{`EmitLess `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: "100%",
  },
  frameButtonBtn: {
    color: "#08d3e0",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButtonBtn1: {
    right: 0,
    top: 8,
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 20,
    width: 48,
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameButton1Btn: {
    color: "#08d3e0",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButton1Btn1: {
    left: 264,
    top: 0,
    position: "absolute",
  },
  frameButton1Btn2: {
    borderRadius: 20,
    width: 48,
    height: 22,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 48,
    minHeight: 2,
    maxWidth: 48,
    maxHeight: 22,
  },
  frameButton2Btn: {
    color: "#fff",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
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
  groupChildLayout: {
    borderRadius: 20,
    height: 94,
    width: 344,
    top: 0,
    left: 0,
    position: "absolute",
  },
  uaeLayout: {
    width: 74,
    height: 22,
  },
  tonnesLayout: {
    height: 9,
    fontSize: 7,
  },
  groupLayout: {
    width: 65,
    height: 65,
  },
  textTypo1: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  rectangleLayout: {
    height: 94,
    width: 344,
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
  groupParent9Layout: {
    height: 209,
    width: 346,
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    top: 0,
  },
  carbonCreditsTypo: {
    width: 250,
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
  groupParent10Layout: {
    height: 201,
    width: 358,
    position: "absolute",
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
    height: "23.89%",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    color: Color.colorWhite,
    top: "0%",
    fontSize: 12,
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
  parentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  uaeTypo: {
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
    top: 76,
    height: 394,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  groupParent9: {
    top: 0,
    left: 0,
  },
  carbonCredits: {
    fontSize: 20,
  },
  text10: {
    fontSize: 15,
    height: 22,
    width: 74,
  },
  carbonCreditsParent: {
    width: 308,
    justifyContent: "center",
    top: 0,
    position: "absolute",
  },
  frameParent17: {
    top: 7,
    left: 20,
    width: 308,
    height: 44,
    position: "absolute",
  },
  homepage2Inner: {
    top: 121,
    left: 22,
    backgroundColor: Color.colorWhite,
  },
  groupChild15: {
    top: 2,
  },
  sep20: {
    width: "77.28%",
    left: "6.98%",
  },
  hkg: {
    width: "59.57%",
    left: "19.68%",
    top: "71.1%",
    height: "28.9%",
    fontSize: 16,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  text11: {
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
  groupParent11: {
    width: "86.68%",
    top: "24.56%",
    right: "6.7%",
    bottom: "40.25%",
    left: "6.62%",
    height: "35.19%",
    position: "absolute",
  },
  frameParent18: {
    top: 0,
  },
  recentItinerary1: {
    fontSize: 20,
  },
  text13: {
    fontSize: 15,
  },
  recentItinerary: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameParent19: {
    top: 15,
    width: 312,
    height: 22,
    left: 22,
    position: "absolute",
  },
  carbonEmission: {
    width: 135,
    height: 24,
    fontSize: 15,
  },
  text14: {
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
    borderRadius: Border.br_xs,
    width: 69,
    height: 32,
    paddingHorizontal: 11,
    paddingVertical: 5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameParent20: {
    top: 125,
    left: 29,
    width: 300,
    height: 49,
    justifyContent: "space-between",
    position: "absolute",
  },
  groupParent10: {
    top: 0,
    left: 0,
  },
  homepage2Child: {
    top: 173,
    left: 16,
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
  frameParent21: {
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
    width: 26,
    height: 26,
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
  homepage2: {
    height: 1500,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  barStyle:{
    borderRadius:50,
    left: 0,
    bottom: 0,
    right: 0,
    padding:5,
},

});

export default HomePage2;
