import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";

const ProjectImpackFeedback = () => {
  const route = useRoute();
  const itemData = route.params?.itemData;
  const imageName = route.params?.imageName;

  const getCountryCode = (countryName) => {
    const countryCodes = {
      Indonesia: "ID",
      Thailand: "TH",
      India: "IN",
      China: "CN",
      "South Africa": "ZA",
      Brazil: "BR",
    };

    return countryCodes[countryName];
  };

  const images = {
    "rectangle-539.png": require("../assets/rectangle-539.png"),
    "rectangle-540.png": require("../assets/rectangle-540.png"),
    "rectangle-5391.png": require("../assets/rectangle-5391.png"),
    "rectangle-5392.png": require("../assets/rectangle-5392.png"),
    "rectangle-5393.png": require("../assets/rectangle-5393.png"),
  };

  const country_code = getCountryCode(itemData.Country);

  return (
    <View style={styles.projectImpackFeedback}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.frame, styles.framePosition]}>
          <Text style={[styles.photoGallery, styles.photoGalleryTypo]}>
            Photo Gallery
          </Text>
        </View>
        <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
          <View style={styles.frame1}>
            <Image
              style={styles.frameLayout1}
              contentFit="cover"
              source={require("../assets/frame-126675.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/frame-126676.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/frame-126677.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/frame-126677.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout1]}
              contentFit="cover"
              source={require("../assets/frame-126677.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.mwpBundledSolarPhotovoltaicParent,
            styles.frame2FlexBox,
          ]}
        >
          <Text style={[styles.mwpBundledSolar, styles.photoGalleryTypo]}>
            {itemData["Project"]}
          </Text>
          <Image
            style={styles.indonesiaIdIcon}
            contentFit="cover"
            source={{
              uri: `https://flagsapi.com/${country_code}/flat/64.png`,
            }}
          />
        </View>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Text style={[styles.recentDevelopments, styles.photoGalleryTypo]}>
            Recent Developments
          </Text>
          <Text style={[styles.recentDevelopments, styles.photoGalleryTypo]}>
            Date
          </Text>
        </View>
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <View style={[styles.frameContainer, styles.frameLayout]}>
          <ScrollView
            style={styles.frameParent}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View
              style={[styles.solarPanelsInstalledParent, styles.parentFlexBox]}
            >
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                10 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>10.09.2023</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                200 Trees Planted
              </Text>
              <Text style={styles.solarPanelsInstalled}>12 .05.2023</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                20 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>09.01.2023</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text
                style={styles.solarPanelsInstalled}
              >{` 1 HP Plant Initiated `}</Text>
              <Text style={styles.solarPanelsInstalled}>10.02.2022</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                10 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>23.01.2022</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                10 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>10.09.2023</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                200 Trees Planted
              </Text>
              <Text style={styles.solarPanelsInstalled}>12 .05.2023</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                20 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>09.01.2023</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text
                style={styles.solarPanelsInstalled}
              >{` 1 HP Plant Initiated `}</Text>
              <Text style={styles.solarPanelsInstalled}>10.02.2022</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                10 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>23.01.2022</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text
                style={styles.solarPanelsInstalled}
              >{` 1 HP Plant Initiated `}</Text>
              <Text style={styles.solarPanelsInstalled}>10.02.2022</Text>
            </View>
            <View style={[styles.treesPlantedParent, styles.parentFlexBox]}>
              <Text style={styles.solarPanelsInstalled}>
                {" "}
                10 Solar Panels Installed
              </Text>
              <Text style={styles.solarPanelsInstalled}>23.01.2022</Text>
            </View>
          </ScrollView>
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
      <View style={[styles.ellipseParent, styles.frameWrapperPosition]}>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text style={styles.emitless}>{`EmitLess `}</Text>
      </View>
      <Image
        style={styles.projectImpackFeedbackChild}
        contentFit="cover"
        source={images[imageName]}
      />
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
  frameChildPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  framePosition: {
    left: 24,
    overflow: "hidden",
  },
  photoGalleryTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameWrapperPosition: {
    left: 22,
    position: "absolute",
  },
  frameLayout1: {
    width: 100,
    borderRadius: Border.br_sm,
    height: 100,
  },
  frame2FlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    width: 340,
    position: "absolute",
  },
  parentFlexBox: {
    width: 311,
    height: 26,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    marginLeft: -195,
    backgroundColor: Color.colorWhitesmoke,
    height: 589,
    left: "50%",
    borderTopLeftRadius: Border.br_xl,
    top: 0,
    position: "absolute",
    width: 390,
  },
  photoGallery: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    left: 0,
  },
  frame: {
    top: 113,
    width: 345,
    overflow: "hidden",
    height: 23,
    position: "absolute",
  },
  frameInner: {
    marginLeft: 24,
  },
  frame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    height: 100,
  },
  frameWrapper: {
    top: 146,
    width: 348,
  },
  mwpBundledSolar: {
    fontSize: FontSize.size_mid,
    width: 284,
    textAlign: "left",
  },
  indonesiaIdIcon: {
    width: 35,
    height: 35,
    overflow: "hidden",
  },
  mwpBundledSolarPhotovoltaicParent: {
    top: 17,
    left: 34,
    width: 325,
    position: "absolute",
  },
  recentDevelopments: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  frame2: {
    top: 262,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    left: 24,
  },
  rectangleView: {
    top: 300,
    left: 25,
    backgroundColor: Color.colorTeal_200,
    height: 289,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  solarPanelsInstalled: {
    fontSize: 17,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.overpassMedium,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
  },
  solarPanelsInstalledParent: {
    height: 26,
  },
  treesPlantedParent: {
    marginTop: 14,
    height: 26,
  },
  frameParent: {
    flex: 1,
  },
  frameContainer: {
    marginLeft: -170,
    top: 323,
    height: 266,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    left: "50%",
  },
  rectangleParent: {
    top: 255,
    height: 590,
    width: 390,
    left: 0,
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
    width: 390,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    width: 26,
    height: 26,
  },
  emitless: {
    fontSize: 16,
    color: Color.colorTeal_100,
    marginLeft: 2.99,
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
  },
  projectImpackFeedbackChild: {
    top: 73,
    left: 26,
    borderRadius: Border.br_xl,
    width: 338,
    height: 182,
    position: "absolute",
  },
  projectImpackFeedback: {
    backgroundColor: Color.colorWhite,
    height: 1042,
    width: "100%",
    flex: 1,
  },
});

export default ProjectImpackFeedback;
