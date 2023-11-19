import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const EcoShare = () => {
  return (
    <View style={styles.ecoshare}>
      <View style={[styles.rectangleParent, styles.navbarPosition]}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <Text style={styles.payment}>Eco-Share</Text>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={[styles.openCamera, styles.emitlessTypo]}>
              Open Camera
            </Text>
          </View>
          <View style={[styles.chooseFromGalleryWrapper, styles.wrapperLayout]}>
            <Text style={[styles.openCamera, styles.emitlessTypo]}>
              Choose From Gallery
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.image56Parent, styles.groupItemPosition]}>
            <Image
              style={[styles.image56Icon, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/image-56.png")}
            />
            <View style={[styles.groupWrapper, styles.frameGroupFlexBox]}>
              <Image
                style={styles.frameItemLayout}
                contentFit="cover"
                source={require("../assets/group-88.png")}
              />
            </View>
            <View style={[styles.groupContainer, styles.frameGroupFlexBox]}>
              <Image
                style={styles.frameItemLayout}
                contentFit="cover"
                source={require("../assets/group-90.png")}
              />
            </View>
            <View style={[styles.groupFrame, styles.frameGroupFlexBox]}>
              <Image
                style={styles.frameItemLayout}
                contentFit="cover"
                source={require("../assets/group-92.png")}
              />
            </View>
            <View style={[styles.frameView, styles.frameGroupFlexBox]}>
              <Image
                style={styles.frameItemLayout}
                contentFit="cover"
                source={require("../assets/group-94.png")}
              />
            </View>
            <View style={[styles.groupWrapper1, styles.frameGroupFlexBox]}>
              <Image
                style={styles.frameItemLayout}
                contentFit="cover"
                source={require("../assets/group-96.png")}
              />
            </View>
          </View>
          <View style={styles.shareParent}>
            <Text style={styles.share}>Share</Text>
            <Image
              style={styles.frameChild3}
              contentFit="cover"
              source={require("../assets/group-98.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View
              style={[
                styles.httpswwwcathaypacificcomWrapper,
                styles.httpswwwcathaypacificcomLayout,
              ]}
            >
              <Text
                style={[
                  styles.httpswwwcathaypacificcom,
                  styles.httpswwwcathaypacificcomLayout,
                ]}
              >
                https://www.cathaypacific.com/file...
              </Text>
            </View>
          </View>
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            contentFit="cover"
            source={require("../assets/group-84.png")}
          />
          <Image
            style={styles.copyAlt1Icon}
            contentFit="cover"
            source={require("../assets/copyalt-1.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.frameChild4Position]} />
          <View style={[styles.frameChild4, styles.frameChild4Position]} />
          <Text style={[styles.givingback, styles.givingbackTypo]}>
            #GivingBack
          </Text>
          <Text style={[styles.takingaction, styles.givingbackTypo]}>
            #TakingAction
          </Text>
          <Text style={styles.travelForGood}>Travel For Good</Text>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-251.png")}
          />
          <Image
            style={[
              styles.sustainableDevelopmentGoalsIcon,
              styles.sustainableIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/sustainable-development-goals-30.png")}
          />
          <Image
            style={[
              styles.sustainableDevelopmentGoalsIcon1,
              styles.sustainableIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/sustainable-development-goals-36.png")}
          />
          <Image
            style={[
              styles.sustainableDevelopmentGoalsIcon2,
              styles.sustainableIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/sustainable-development-goals-39.png")}
          />
          <Image
            style={[
              styles.sustainableDevelopmentGoalsIcon3,
              styles.sustainableIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/sustainable-development-goals-42.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-543.png")}
          />
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.navbarChild, styles.navbarChildPosition]} />
        <View style={[styles.homeButtonParent, styles.frameGroupFlexBox]}>
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
              style={[styles.image52Icon, styles.navbarChildPosition]}
              contentFit="cover"
              source={require("../assets/image-52.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.ellipseParent, styles.parentFlexBox]}>
        <Image
          style={[styles.frameChild5, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text
          style={[styles.emitless, styles.emitlessTypo]}
        >{`EmitLess `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  emitlessTypo: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    fontWeight: "700",
  },
  wrapperLayout: {
    paddingVertical: 5,
    paddingHorizontal: 11,
    height: 40,
    width: 170,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  groupItemPosition: {
    top: 23,
    position: "absolute",
  },
  frameItemLayout: {
    height: 43,
    width: 43,
  },
  frameGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupLayout: {
    height: 31,
    width: 286,
    position: "absolute",
  },
  httpswwwcathaypacificcomLayout: {
    width: 208,
    height: 14,
    position: "absolute",
  },
  rectangleLayout: {
    width: 330,
    position: "absolute",
  },
  frameChild4Position: {
    backgroundColor: Color.colorDarkslategray_100,
    width: 330,
    left: 0,
    position: "absolute",
  },
  givingbackTypo: {
    height: 17,
    left: 20,
    display: "flex",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsBold,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 26,
    height: 26,
  },
  sustainableIconLayout: {
    height: 42,
    width: 42,
    top: 369,
    position: "absolute",
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
    backgroundColor: Color.colorWhitesmoke,
    height: 772,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  payment: {
    top: 16,
    left: 15,
    fontSize: 18,
    letterSpacing: -1,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  openCamera: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
  },
  chooseFromGalleryWrapper: {
    marginLeft: 18,
  },
  frameParent: {
    top: 52,
    left: 16,
  },
  image56Icon: {
    zIndex: 0,
  },
  groupWrapper: {
    left: 53,
    zIndex: 1,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    left: 112,
    zIndex: 2,
    top: 0,
    position: "absolute",
  },
  groupFrame: {
    left: 168,
    zIndex: 3,
    top: 0,
    position: "absolute",
  },
  frameView: {
    left: 223,
    zIndex: 4,
    top: 0,
    position: "absolute",
  },
  groupWrapper1: {
    left: 279,
    zIndex: 5,
    top: 0,
    position: "absolute",
  },
  image56Parent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  share: {
    fontSize: 13,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "#0f0f0f",
    width: 44,
    height: 13,
    textAlign: "left",
  },
  frameChild3: {
    width: 14,
    marginLeft: 259.24,
    height: 14,
  },
  shareParent: {
    left: 2,
    width: 316,
    height: 12,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 16,
    backgroundColor: "#f9f9f9",
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 1.6,
    top: 0,
    left: 0,
  },
  httpswwwcathaypacificcom: {
    fontSize: 11,
    lineHeight: 19,
    fontFamily: FontFamily.interRegular,
    color: "rgba(61, 90, 128, 0.5)",
    textAlign: "left",
    top: 0,
    left: 0,
  },
  httpswwwcathaypacificcomWrapper: {
    top: 7,
    left: 11,
  },
  rectangleGroup: {
    top: 79,
    left: 17,
  },
  groupItem: {
    left: 286,
    width: 50,
    height: 50,
  },
  copyAlt1Icon: {
    top: 84,
    left: 270,
    height: 20,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  frameGroup: {
    top: 565,
    left: 33,
    width: 322,
    height: 110,
    position: "absolute",
  },
  rectangleView: {
    height: 47,
    top: 0,
  },
  frameChild4: {
    top: 359,
    height: 64,
  },
  givingback: {
    top: 372,
    width: 82,
  },
  takingaction: {
    top: 391,
    width: 99,
  },
  travelForGood: {
    top: 13,
    left: 218,
    width: 96,
    height: 22,
    display: "flex",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsBold,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  ellipseIcon: {
    top: 10,
    left: 190,
    height: 26,
    position: "absolute",
  },
  sustainableDevelopmentGoalsIcon: {
    left: 131,
  },
  sustainableDevelopmentGoalsIcon1: {
    left: 179,
  },
  sustainableDevelopmentGoalsIcon2: {
    left: 228,
  },
  sustainableDevelopmentGoalsIcon3: {
    left: 276,
  },
  rectangleIcon: {
    top: 47,
    height: 312,
    left: 0,
  },
  rectangleContainer: {
    top: 114,
    left: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0, 93, 99, 0.39)",
    height: 423,
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
    height: 25,
    marginLeft: 75,
    width: 25,
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
    height: "33.33%",
    width: "81.9%",
    top: "27.16%",
    right: "8.87%",
    bottom: "39.51%",
    left: "9.23%",
    flexDirection: "row",
    position: "absolute",
  },
  navbar: {
    top: 763,
    height: 81,
  },
  frameChild5: {
    height: 26,
  },
  emitless: {
    fontSize: 16,
    color: Color.colorTeal,
    marginLeft: 2.99,
  },
  ellipseParent: {
    top: 43,
    left: 22,
    width: 101,
    height: 26,
  },
  ecoshare: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default EcoShare;
