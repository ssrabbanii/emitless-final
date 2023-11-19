import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { Border, FontFamily, Color, Padding, FontSize } from "../GlobalStyles";

const GiftCardPayment1 = () => {
  return (
    <View style={styles.giftCardPayment}>
      <View style={[styles.rectangleParent, styles.navbarPosition]}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <View style={styles.paymentParent}>
          <Text style={styles.payment}>Enter Gift Card Amount</Text>
          <View style={styles.frameWrapper}>
            <View style={styles.frameParent}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/frame-3.png")}
              />
              <View style={[styles.paymentWrapper, styles.paymentFlexBox]}>
                <Text style={[styles.payment1, styles.paymentTypo]}>
                  Specific Amount
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.searchBar}>
            <Input
              style={styles.searchBarChild}
              placeholder="Enter Amount in HKD"
              placeholderTextColor="#074c4e"
              textStyle={styles.rectangleTextInputText}
            />
          </View>
          <View style={styles.paymentContainer}>
            <Text style={styles.payment}>Select Payment Method</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-4.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={[styles.payment3, styles.paymentTypo]}>
                Saved Cards
              </Text>
            </View>
          </View>
          <Image
            style={styles.group1266671}
            contentFit="cover"
            source={require("../assets/group-126667-1.png")}
          />
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment4}>Redeem Asia Miles</Text>
            </View>
          </View>
          <View style={styles.frameFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/apple-pay.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment4}>Apple Pay</Text>
            </View>
          </View>
          <View style={styles.frameFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />
            <Image
              style={[styles.paypalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/paypal.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment4}>PayPal</Text>
            </View>
          </View>
          <View style={styles.frameFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />
            <Image
              style={[styles.paypalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/alipay.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment4}>Alipay</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={styles.rectangleView} />
          <View
            style={[
              styles.giftCardAmount100HkdParent,
              styles.rectangleGroupPosition,
            ]}
          >
            <Text style={styles.giftCardAmountTypo}>
              Gift Card Amount                                            100 HKD
            </Text>
            <Text
              style={[styles.equivalentOffset15, styles.giftCardAmountTypo]}
            >
              Equivalent Offset                                        1.5 Tonnes
            </Text>
            <Text
              style={[styles.equivalentOffset15, styles.giftCardAmountTypo]}
            >
              Asia Miles                                                                7216
            </Text>
          </View>
        </View>
        <View style={styles.payWrapper}>
          <Text style={[styles.pay, styles.payTypo]}>PAY</Text>
        </View>
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
              source={require("../assets/payment2.png")}
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
      <View style={styles.ellipseParent}>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text style={[styles.emitless, styles.payTypo]}>{`EmitLess `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleTextInputText: {
    color: "#074c4e",
  },
  navbarPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  paymentFlexBox: {
    marginLeft: 13.96,
    alignItems: "center",
    flexDirection: "row",
  },
  paymentTypo: {
    height: 16,
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: 14,
    alignItems: "center",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -1,
  },
  frameFlexBox: {
    height: 35,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 7,
  },
  iconLayout: {
    width: 35,
    height: 35,
    marginLeft: 13.96,
  },
  rectangleGroupPosition: {
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  giftCardAmountTypo: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: 14,
    textAlign: "left",
  },
  payTypo: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    fontWeight: "700",
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
  frameChild: {
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
    height: 772,
    width: 390,
    left: 0,
    position: "absolute",
  },
  payment: {
    fontSize: 18,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "700",
    letterSpacing: -1,
  },
  frameItem: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  payment1: {
    width: 128,
  },
  paymentWrapper: {
    justifyContent: "center",
  },
  frameParent: {
    width: 228,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: 7,
  },
  searchBarChild: {
    backgroundColor: Color.colorPaleturquoise,
    width: 337,
    alignSelf: "center",
    borderRadius: Border.br_xl,
  },
  searchBar: {
    width: 363,
    height: 48,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_sm,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  paymentContainer: {
    flexDirection: "row",
    marginTop: 7,
  },
  payment3: {
    width: 80,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 7,
  },
  group1266671: {
    height: 138,
    marginTop: 7,
    width: 364,
  },
  payment4: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -1,
  },
  frameContainer: {
    width: 143,
  },
  paypalIcon: {
    overflow: "hidden",
  },
  paymentParent: {
    top: 16,
    left: 15,
    height: 538,
    width: 364,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 20,
    backgroundColor: Color.colorTeal_200,
    width: 351,
    height: 125,
    zIndex: 0,
  },
  equivalentOffset15: {
    marginTop: 4,
  },
  giftCardAmount100HkdParent: {
    top: 9,
    zIndex: 1,
    justifyContent: "center",
  },
  rectangleGroup: {
    top: 549,
    width: 350,
    height: 66,
  },
  pay: {
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
  },
  payWrapper: {
    top: 626,
    left: 141,
    borderRadius: 13,
    backgroundColor: Color.colorTeal_100,
    width: 109,
    height: 40,
    paddingHorizontal: 11,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 73,
    height: 771,
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
  ellipseIcon: {
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
    left: 22,
    width: 101,
    height: 26,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  giftCardPayment: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default GiftCardPayment1;
