import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FrameComponent1 from "../components/Frame2016453534";
import Frame3 from "../components/Frame3";
import FrameComponent from "../components/Frame20167777";
import Frame1 from "../components/Frame1";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const HomePage7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage2}>
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
            name= "Activity"
            component={FrameComponent1}
          />
          <TopTab.Screen
            name="Donations"
            component={FrameComponent}
          />
        </TopTab.Navigator>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.navbarChild, styles.navbarChildPosition]} />
        <View style={styles.navbarInner}>
          <View style={[styles.homeButtonParent, styles.navbarChildPosition]}>
            <Image
              style={styles.homeButtonIcon}
              contentFit="cover"
              source={require("../assets/home-button.png")}
            />
            <Image
              style={styles.paymentIcon}
              contentFit="cover"
              source={require("../assets/payment1.png")}
            />
            <Image
              style={styles.mapsButtonIcon}
              contentFit="cover"
              source={require("../assets/maps-button.png")}
            />
            <View style={styles.carconCredits}>
              <Image
                style={[styles.image52Icon, styles.navbarChildPosition]}
                contentFit="cover"
                source={require("../assets/image-52.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.groupParent} 
      onPress={() => navigation.navigate("HomePage2")}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1266611.png")}
        />
        <View style={[styles.frameParent, styles.groupChildLayout]}>
          <View style={[styles.frameParent, styles.groupChildLayout]} />
          <View style={[styles.frameGroup, styles.framePosition]}>
            {/*<Button
              title="Show"
              radius={5}
              iconPosition="left"
              type="solid"
              color="#005d63"
              titleStyle={styles.frameButtonBtn}
              onPress={() => navigation.navigate("Itinerary")}
              containerStyle={styles.frameButtonBtn1}
              buttonStyle={styles.frameButtonBtn2}
          />*/}
            <Text style={[styles.recentItinerary, styles.textTypo]}>
              <Text style={styles.recentItinerary1}>Recent Itinerary</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.frameContainer, styles.parentFlexBox]}>
            <View style={styles.carbonEmissionParent}>
              <Text style={[styles.carbonEmission, styles.textTypo]}>
                Carbon Emission
              </Text>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>4.46</Text>
                <Text style={[styles.tonnes, styles.textTypo]}>TONNES</Text>
              </View>
            </View>
            <RNPButton
              style={styles.frameInner}
              mode="outlined"
              labelStyle={styles.frameButton1Btn}
              contentStyle={styles.frameButton1Btn1}
            >
              Offset
            </RNPButton>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.groupContainer, styles.groupLayout]} 
      onPress={() => navigation.navigate("HomePage8")}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1266641.png")}
        />
        <View style={[styles.frameView, styles.framePosition]}>
          <Pressable
            style={styles.carbonCreditsParent}
            onPress={() => navigation.navigate("HomePage7")}
          >
            <Text style={[styles.carbonCredits, styles.textTypo]}>
              Retired Carbon Credits
            </Text>
            <Text style={[styles.text2, styles.textTypo]}>10.956</Text>
          </Pressable>
          {/*<Button
            title="Show"
            radius={5}
            iconPosition="left"
            type="solid"
            color="#005d63"
            titleStyle={styles.frameButton2Btn}
            onPress={() => navigation.navigate("HomePage8")}
            containerStyle={styles.frameButton2Btn1}
            buttonStyle={styles.frameButton2Btn2}
        />*/}
        </View>
        <View style={[styles.frameParent1, styles.parentPosition]}>
          <View style={styles.membershipNumberParent}>
            <Text style={[styles.membershipNumber, styles.textTypo]}>
              Membership Number
            </Text>
            <Text style={styles.text3}>174 145 ****</Text>
          </View>
          <View style={styles.statusParent}>
            <Text style={[styles.status, styles.textTypo]}>Status</Text>
            <Text style={[styles.green, styles.greenTypo]}>Green</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.frameParent2}>
        <View>
          <Text style={[styles.meiLing, styles.textTypo]}>Mei Lin</Text>
          <Text style={[styles.premiumTraveller, styles.greenTypo]}>
            Premium Traveller
          </Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-2452.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.parentPosition]}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
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
    color: "#08d3e0",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButtonBtn1: {
    left: 259,
    top: 0,
    position: "absolute",
  },
  frameButtonBtn2: {
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
  frameButton1Btn: {
    color: "#fff",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButton1Btn1: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 13,
  },
  frameButton2Btn: {
    color: "#08d3e0",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  frameButton2Btn1: {
    right: 0,
    top: 8,
    position: "absolute",
  },
  frameButton2Btn2: {
    borderRadius: 20,
    width: 48,
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameItemLayout: {
    height: 471,
    width: 390,
    position: "absolute",
  },
  frameItemPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  navbarChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChildLayout: {
    height: 200,
    width: 346,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    left: 21,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  parentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  groupLayout: {
    height: 199,
    width: 358,
    position: "absolute",
  },
  parentPosition: {
    left: 22,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  greenTypo: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameItem: {
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
    height: 471,
    width: 390,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -195,
    top: 374,
    left: "50%",
  },
  navbarChild: {
    backgroundColor: Color.colorPowderblue,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
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
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  carconCredits: {
    width: 27,
    height: 27,
    marginLeft: 75,
  },
  homeButtonParent: {
    flexDirection: "row",
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
  frameParent: {
    top: 0,
  },
  recentItinerary1: {
    fontSize: 20,
  },
  text: {
    fontSize: 15,
  },
  recentItinerary: {
    width: 184,
    textAlign: "left",
    color: Color.colorWhite,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 15,
    width: 307,
    height: 22,
  },
  carbonEmission: {
    width: 135,
    height: 24,
    fontSize: 15,
    textAlign: "left",
    color: Color.colorWhite,
  },
  text1: {
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
  frameContainer: {
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
  groupInner: {
    left: 0,
    top: 0,
  },
  carbonCredits: {
    width: 350,
    fontSize: 20,
    textAlign: "left",
    color: Color.colorWhite,
    height: 22,
  },
  text2: {
    width: 74,
    fontSize: 15,
    textAlign: "left",
    color: Color.colorWhite,
    height: 22,
  },
  carbonCreditsParent: {
    width: 164,
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameView: {
    top: 7,
    width: 313,
    height: 44,
  },
  membershipNumber: {
    width: 187,
    fontSize: 15,
    textAlign: "left",
    color: Color.colorWhite,
    height: 22,
  },
  text3: {
    fontSize: FontSize.size_smi,
    letterSpacing: 8.5,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    width: 187,
    textAlign: "left",
    color: Color.colorWhite,
    height: 22,
  },
  membershipNumberParent: {
    width: 187,
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    width: 51,
    fontSize: 15,
    textAlign: "left",
    color: Color.colorWhite,
    height: 22,
  },
  green: {
    width: 31,
    height: 11,
    color: Color.colorWhite,
  },
  statusParent: {
    width: 53,
    marginLeft: 73.81,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent1: {
    top: 139,
    width: 314,
    alignItems: "center",
    justifyContent: "center",
  },
  groupContainer: {
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
  frameParent2: {
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
    fontSize: 16,
    color: Color.colorTeal_100,
    marginLeft: 2.99,
    textAlign: "left",
  },
  ellipseParent: {
    top: 43,
    width: 101,
    height: 26,
    alignItems: "center",
  },
  homePage2: {
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
}
});

export default HomePage7;
