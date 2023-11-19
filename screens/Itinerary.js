import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border } from "../GlobalStyles";

const Itinerary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.itinerary}>
      <Pressable style={[styles.groupParent, styles.groupLayout]}
      onPress={() => navigation.navigate("HomePage7")}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-126664.png")}
        />
        <View style={styles.frameParent}>
          <Pressable
            style={styles.carbonCreditsParent}
            onPress={() => navigation.navigate("HomePage7")}
          >
            <Text style={[styles.carbonCredits, styles.textTypo1]}>
              Retired Carbon Credits
            </Text>
            <Text style={[styles.text, styles.textTypo1]}>10.956</Text>
          </Pressable>
          {/*<Button
            title="Show"
            radius={5}
            iconPosition="left"
            type="solid"
            color="#005d63"
            titleStyle={styles.frameButtonBtn}
            onPress={() => navigation.navigate("HomePage7")}
            containerStyle={styles.frameButtonBtn1}
            buttonStyle={styles.frameButtonBtn2}
  />*/}
        </View>
      </Pressable>
      <View style={styles.frameGroup}>
        <View>
          <Text style={[styles.meiLing, styles.meiLingTypo]}>Mei Lin</Text>
          <Text style={[styles.premiumTraveller, styles.meiLingTypo]}>
            Premium Traveller
          </Text>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-245.png")}
        />
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text style={styles.emitless}>{`EmitLess `}</Text>
      </View>
      <View style={[styles.ticket, styles.ticketLayout]}>
        <View style={[styles.component7, styles.frameViewPosition]}>
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.component7Child} />
          <View style={[styles.frameContainer, styles.parentFrameFlexBox]}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.flightTypo]}>Flight</Text>
              <Text style={[styles.cx237, styles.textTypo]}>CX 237</Text>
            </View>
            <View style={[styles.equivalentHkdParent, styles.parentFlexBox]}>
              <Text style={[styles.equivalentHkd, styles.flightTypo]}>
                Equivalent HKD
              </Text>
              <Text style={[styles.text1, styles.textTypo]}>292.71</Text>
            </View>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.asiaMiles, styles.flightTypo]}>
                Asia Miles
              </Text>
              <Text style={[styles.text2, styles.textTypo]}>7216</Text>
            </View>
          </View>
          <View style={styles.f24Parent}>
            <Text style={[styles.f24, styles.f24Typo]}>F24</Text>
            <Text style={[styles.meiLing1, styles.f24Typo]}>Mei Lin</Text>
            <Text style={[styles.passenger, styles.seatTypo]}>Passenger</Text>
            <Text style={[styles.seat, styles.seatTypo]}>Seat</Text>
          </View>
        </View>
        <Image
          style={[styles.component5Icon, styles.frameViewPosition]}
          contentFit="cover"
          source={require("../assets/component-5.png")}
        />
        <Image
          style={[styles.ticketChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-1266612.png")}
        />
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <View style={[styles.frameParent1, styles.parentLayout]}>
              <View style={[styles.sep20Parent, styles.parentLayout]}>
                <Text style={[styles.sep20, styles.sepTypo]}>Sep 20</Text>
                <Text style={[styles.hkg, styles.hkgTypo]}>HKG</Text>
                <Text style={[styles.text3, styles.f24Typo]}>09:50</Text>
              </View>
              <View style={[styles.sep21Parent, styles.parentLayout]}>
                <Text style={[styles.sep21, styles.sepTypo]}>Sep 21</Text>
                <Text style={[styles.lhr, styles.hkgTypo]}>LHR</Text>
                <Text style={[styles.text3, styles.f24Typo]}>15:38</Text>
              </View>
              <View style={[styles.h20mParent, styles.parentLayout]}>
                <Text style={[styles.h20m, styles.h20mTypo]}>14h20m</Text>
                <Text style={[styles.business, styles.h20mTypo]}>Business</Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
              <Image
                style={[styles.vectorIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
          <View style={styles.recentItineraryWrapper}>
            <Text style={[styles.recentItinerary, styles.textTypo1]}>
              <Text style={styles.recentItinerary1}>Recent Itinerary</Text>
              <Text style={styles.text5}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.frameParent2, styles.parentFrameFlexBox]}>
            <View style={styles.carbonEmissionParent}>
              <Text style={[styles.carbonEmission, styles.text6Typo]}>
                Carbon Emission
              </Text>
              <View style={[styles.parent, styles.parentFrameFlexBox]}>
                <Text style={[styles.text6, styles.text6Typo]}>4.46</Text>
                <Text style={[styles.tonnes, styles.text6Typo]}>TONNES</Text>
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
              source={require("../assets/payment.png")}
            />
            <Image
              style={styles.mapsButtonIcon}
              contentFit="cover"
              source={require("../assets/maps-button1.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: "#fff",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  groupLayout: {
    height: 209,
    width: 346,
    position: "absolute",
  },
  textTypo1: {
    height: 22,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  meiLingTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  ticketLayout: {
    width: 357,
    position: "absolute",
  },
  frameViewPosition: {
    top: "50%",
    marginLeft: -178.6,
    left: "50%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentFrameFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  flightTypo: {
    height: 13,
    textTransform: "capitalize",
    fontSize: 14,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  textTypo: {
    marginTop: 10.97,
    height: 15,
    fontSize: 17,
    fontFamily: FontFamily.overpassBold,
    textTransform: "capitalize",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  parentFlexBox: {
    marginLeft: 33.91,
    alignItems: "center",
    justifyContent: "center",
  },
  f24Typo: {
    color: Color.colorMediumturquoise,
    textTransform: "capitalize",
    fontWeight: "700",
    position: "absolute",
  },
  seatTypo: {
    fontSize: 12,
    height: "47.75%",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    top: "0%",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameLayout: {
    height: 200,
    width: 357,
    position: "absolute",
  },
  parentLayout: {
    height: 70,
    position: "absolute",
  },
  sepTypo: {
    height: "23.89%",
    fontSize: 12,
    textAlign: "center",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    top: "0%",
    color: Color.colorWhite,
    position: "absolute",
  },
  hkgTypo: {
    top: "71.1%",
    height: "28.9%",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  h20mTypo: {
    height: "23.79%",
    fontSize: 12,
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
  },
  text6Typo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  navbarChildPosition: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  carbonCredits: {
    width: 350,
    height: 22,
    fontSize: 20,
  },
  text: {
    width: 74,
    fontSize: 15,
  },
  carbonCreditsParent: {
    width: 164,
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 7,
    left: 20,
    width: 308,
    height: 44,
    position: "absolute",
  },
  groupParent: {
    top: 121,
    left: 22,
  },
  meiLing: {
    fontSize: 24,
    width: 156,
    height: 27,
    textAlign: "left",
  },
  premiumTraveller: {
    fontSize: 10,
    marginTop: 3.99,
    textAlign: "left",
  },
  frameChild: {
    width: 45,
    height: 45,
    marginLeft: 144.63,
  },
  frameGroup: {
    top: 72,
    right: 23,
    width: 345,
    height: 46,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  frameItem: {
    width: 26,
    height: 26,
  },
  emitless: {
    color: Color.colorTeal_100,
    marginLeft: 2.99,
    fontSize: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  ellipseParent: {
    top: 43,
    width: 101,
    height: 26,
    alignItems: "center",
    flexDirection: "row",
    left: 22,
    position: "absolute",
  },
  groupIcon: {
    height: "100.09%",
    width: "100.08%",
    right: "-0.08%",
    bottom: "-0.09%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  component7Child: {
    height: "49.86%",
    width: "90.76%",
    top: "35.86%",
    right: "4.76%",
    bottom: "14.28%",
    left: "4.48%",
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.42)",
    position: "absolute",
  },
  flight: {
    width: 37,
    textAlign: "left",
  },
  cx237: {
    width: 57,
    textAlign: "center",
    marginTop: 10.97,
    height: 15,
    fontSize: 17,
  },
  flightParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  equivalentHkd: {
    width: 100,
    textAlign: "left",
  },
  text1: {
    width: 51,
    marginTop: 10.97,
    height: 15,
    fontSize: 17,
    textAlign: "left",
  },
  equivalentHkdParent: {
    overflow: "hidden",
  },
  asiaMiles: {
    width: 64,
    textAlign: "right",
  },
  text2: {
    width: 38,
    textAlign: "right",
    marginTop: 10.97,
    height: 15,
    fontSize: 17,
  },
  frameContainer: {
    top: 116,
    left: 34,
    position: "absolute",
  },
  f24: {
    height: "55.9%",
    width: "11.87%",
    left: "88.13%",
    top: "44.1%",
    color: Color.colorMediumturquoise,
    fontSize: 17,
    textAlign: "right",
    fontFamily: FontFamily.overpassBold,
  },
  meiLing1: {
    height: "50.56%",
    width: "29.39%",
    fontFamily: FontFamily.robotoBold,
    top: "44.1%",
    color: Color.colorMediumturquoise,
    fontSize: 17,
    left: "0%",
    textAlign: "left",
  },
  passenger: {
    width: "19.64%",
    left: "0.47%",
    textAlign: "left",
  },
  seat: {
    width: "8.43%",
    left: "91.38%",
    textAlign: "right",
  },
  f24Parent: {
    top: 33,
    left: 17,
    width: 319,
    height: 36,
    position: "absolute",
  },
  component7: {
    marginTop: -96.35,
    height: 222,
    width: 357,
    position: "absolute",
  },
  component5Icon: {
    marginTop: 125.05,
    height: 171,
    width: 357,
    position: "absolute",
  },
  ticketChild: {
    marginTop: -294.55,
    top: "50%",
    marginLeft: -178.6,
    left: "50%",
  },
  sep20: {
    width: "77.38%",
    left: "7%",
  },
  hkg: {
    width: "59.61%",
    left: "19.75%",
  },
  text3: {
    height: "35.19%",
    top: "30.19%",
    fontSize: 19,
    fontFamily: FontFamily.overpassBold,
    left: "0%",
    textAlign: "left",
    width: "100%",
  },
  sep20Parent: {
    width: 56,
    left: 0,
    top: 0,
  },
  sep21: {
    width: "79.96%",
    left: "17.21%",
  },
  lhr: {
    width: "63.56%",
    left: "23.48%",
  },
  sep21Parent: {
    left: 260,
    width: 49,
    top: 0,
  },
  h20m: {
    width: "30.59%",
    left: "36.16%",
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    height: "23.79%",
    top: "0%",
    color: Color.colorWhite,
  },
  business: {
    width: "35.6%",
    top: "76.21%",
    left: "32.88%",
    fontWeight: "900",
    fontFamily: FontFamily.overpassBlack,
    color: Color.colorGray_100,
  },
  vectorIcon: {
    height: "9.26%",
    top: "43.02%",
    bottom: "47.72%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  h20mParent: {
    left: 77,
    width: 162,
    top: 0,
  },
  vectorIcon1: {
    height: "34.05%",
    width: "7.72%",
    top: "31.05%",
    right: "46.14%",
    bottom: "34.9%",
    left: "46.14%",
    position: "absolute",
  },
  frameParent1: {
    top: 49,
    left: 24,
    width: 310,
  },
  frameWrapper: {
    left: 0,
    top: 0,
  },
  recentItinerary1: {
    fontSize: 20,
  },
  text5: {
    fontSize: 15,
  },
  recentItinerary: {
    width: 190,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  recentItineraryWrapper: {
    top: 15,
    width: 313,
    height: 24,
    left: 22,
    position: "absolute",
  },
  carbonEmission: {
    width: 135,
    height: 24,
    fontSize: 15,
    textAlign: "left",
  },
  text6: {
    fontSize: 35,
    width: 80,
    height: 39,
    textAlign: "left",
  },
  tonnes: {
    fontSize: 7,
    width: 30,
    height: 9,
    textAlign: "left",
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameParent2: {
    top: 125,
    left: 29,
    width: 299,
    height: 49,
    justifyContent: "space-between",
    position: "absolute",
  },
  frameView: {
    marginTop: -296.05,
    top: "50%",
    marginLeft: -178.6,
    left: "50%",
  },
  ticket: {
    marginLeft: -179,
    bottom: 79,
    height: 592,
    left: "50%",
    width: 357,
  },
  navbarChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorPowderblue,
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carconCredits: {
    width: 27,
    marginLeft: 75,
    height: 27,
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
    width: 390,
    height: 81,
    left: 0,
    position: "absolute",
  },
  itinerary: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
  frameButton2Btn: {
    color: "#fff",
    fontSize: 14.961933135986328,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
});

export default Itinerary;
