import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const HomePage8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage8}>
      <View style={[styles.homepage8Child, styles.navbarPosition]} />
      <View style={[styles.frame, styles.frameLayout]}>
        <Text style={[styles.pastActivity, styles.meiLingTypo]}>
          Past Activity
        </Text>
      </View>
      <View style={[styles.homepage8Item, styles.homepage8Layout]} />
      <View style={[styles.homepage8Inner, styles.homepage8Layout]}>
        <ScrollView
          style={styles.chinaEcox670HkdParent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Text style={[styles.chinaEcox670, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Carbon Credit Purchase +1,000 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Green Life -820 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Carbon Credit Purchase +2,000 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Carbon Credit Purchase +2,000 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Green Life -820 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Green Life -820 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Green Life -820 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            Carbon Credit Purchase +2,000 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
          <Text style={[styles.carbonCreditPurchase, styles.carbonTypo]}>
            China EcoX -670 HKD
          </Text>
        </ScrollView>
      </View>
      <View style={styles.frame1}>
        <View style={styles.parentLayout}>
          <Image
            style={styles.image53Icon}
            contentFit="cover"
            source={require("../assets/image-53.png")}
          />
          <Text style={[styles.donateWithCarbon, styles.carbonTypo]}>
            Donate with Carbon Credits
          </Text>
        </View>
        <View style={[styles.image54Parent, styles.parentLayout]}>
          <Image
            style={styles.image53Icon}
            contentFit="cover"
            source={require("../assets/image-54.png")}
          />
          <Text style={[styles.donateWithCarbon, styles.carbonTypo]}>
            Offset with Carbon Credits
          </Text>
        </View>
        <Pressable style={[styles.image54Parent, styles.parentLayout]}
        onPress={() => navigation.navigate("GiftCardPayment")}>
          <Image
            style={styles.image53Icon}
            contentFit="cover"
            source={require("../assets/image-55.png")}
          />
          <Text style={[styles.donateWithCarbon, styles.carbonTypo]}>Purchase Gift Cards</Text>
        </Pressable>
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
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
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1266641.png")}
        />
        <View style={styles.frameParent}>
          <Pressable
            style={[styles.carbonCreditsParent, styles.groupChildPosition]}
            onPress={() => navigation.navigate("HomePage8")}
          >
            <Text style={[styles.carbonCredits, styles.text1Layout]}>
              Carbon Credits
            </Text>
            <Text style={[styles.text, styles.textTypo]}>10,956</Text>
          </Pressable>
          <Button
            title="Show"
            radius={5}
            iconPosition="left"
            type="solid"
            color="#005d63"
            titleStyle={styles.frameButtonBtn}
            onPress={() => navigation.navigate("HomePage8")}
            containerStyle={styles.frameButtonBtn1}
            buttonStyle={styles.frameButtonBtn2}
          />
        </View>
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <View style={styles.membershipNumberParent}>
            <Text style={[styles.membershipNumber, styles.textTypo]}>
              Membership Number
            </Text>
            <Text style={[styles.text1, styles.text1Layout]}>174 145 ****</Text>
          </View>
          <View style={styles.statusParent}>
            <Text style={[styles.status, styles.textTypo]}>Status</Text>
            <Text style={[styles.green, styles.greenTypo]}>Green</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View>
          <Text style={[styles.meiLing, styles.meiLingTypo]}>Mei Ling</Text>
          <Text style={[styles.premiumTraveller, styles.greenTypo]}>
            Premium Traveller
          </Text>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-2451.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.frameGroupPosition]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text style={[styles.emitless, styles.meiLingTypo]}>{`EmitLess `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 2,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameButtonBtn: {
    color: "#08d3e0",
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
    display: "none",
  },
  navbarPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 345,
    position: "absolute",
  },
  meiLingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  homepage8Layout: {
    width: 340,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  carbonTypo: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  parentLayout: {
    height: 100,
    backgroundColor: Color.colorAqua,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
  groupLayout: {
    height: 199,
    width: 358,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  text1Layout: {
    height: 22,
    color: Color.colorWhite,
    textAlign: "left",
  },
  textTypo: {
    fontSize: 15,
    height: 22,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameGroupPosition: {
    left: 22,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  greenTypo: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  homepage8Child: {
    top: 322,
    backgroundColor: Color.colorWhitesmoke,
    height: 471,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  pastActivity: {
    color: Color.colorBlack,
    fontSize: 20,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 454,
    left: 24,
    height: 30,
    overflow: "hidden",
  },
  homepage8Item: {
    top: 492,
    left: 25,
    backgroundColor: Color.colorTeal_200,
    height: 353,
  },
  chinaEcox670: {
    fontSize: 17,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  },
  carbonCreditPurchase: {
    marginTop: 14,
    fontSize: 17,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  },
  chinaEcox670HkdParent: {
    flex: 1,
  },
  homepage8Inner: {
    marginLeft: -170,
    top: 515,
    left: "50%",
    height: 349,
    justifyContent: "center",
    alignItems: "center",
  },
  image53Icon: {
    width: 40,
    height: 40,
  },
  donateWithCarbon: {
    fontSize: 11,
    textAlign: "center",
    width: 91,
    marginTop: 9.97,
    height: 26,
  },
  image54Parent: {
    width: 92,
    marginLeft: 22,
  },
  frame1: {
    top: 346,
    left: 36,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
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
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  carbonCredits: {
    width: 190,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    height: 22,
    fontSize: 20,
  },
  text: {
    width: 74,
  },
  carbonCreditsParent: {
    width: 164,
    justifyContent: "center",
    position: "absolute",
  },
  frameParent: {
    top: 7,
    left: 21,
    width: 313,
    height: 44,
    position: "absolute",
  },
  membershipNumber: {
    width: 187,
  },
  text1: {
    fontSize: FontSize.size_smi,
    letterSpacing: 8.5,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    width: 187,
  },
  membershipNumberParent: {
    width: 187,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    width: 51,
  },
  green: {
    width: 31,
    height: 11,
    color: Color.colorWhite,
    fontSize: 10,
  },
  statusParent: {
    width: 53,
    marginLeft: 73.81,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    top: 139,
    width: 314,
    justifyContent: "center",
  },
  groupParent: {
    top: 123,
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
  frameChild: {
    width: 45,
    height: 45,
    marginLeft: 144.63,
  },
  frameContainer: {
    top: 72,
    right: 23,
    height: 46,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameItem: {
    width: 26,
    height: 26,
  },
  emitless: {
    fontSize: 16,
    color: Color.colorTeal_100,
    marginLeft: 2.99,
  },
  ellipseParent: {
    top: 43,
    width: 101,
    height: 26,
  },
  homepage8: {
    backgroundColor: Color.colorWhite,
    height: 1362,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomePage8;
