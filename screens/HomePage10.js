import * as React from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const HomePage10 = () => {
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

  const navigation = useNavigation();

  const country_code = getCountryCode(itemData.Country);

  const images = {
    "rectangle-539.png": require("../assets/rectangle-539.png"),
    "rectangle-540.png": require("../assets/rectangle-540.png"),
    "rectangle-5391.png": require("../assets/rectangle-5391.png"),
    "rectangle-5392.png": require("../assets/rectangle-5392.png"),
    "rectangle-5393.png": require("../assets/rectangle-5393.png"),
  };

  const SDGImages = {
    1: require("../assets/SDG/1.png"),
    2: require("../assets/SDG/2.png"),
    3: require("../assets/SDG/3.png"),
    4: require("../assets/SDG/4.png"),
    5: require("../assets/SDG/5.png"),
    6: require("../assets/SDG/6.png"),
    7: require("../assets/SDG/7.png"),
    8: require("../assets/SDG/8.png"),
    9: require("../assets/SDG/9.png"),
    10: require("../assets/SDG/10.png"),
    11: require("../assets/SDG/11.png"),
    12: require("../assets/SDG/12.png"),
    13: require("../assets/SDG/13.png"),
    14: require("../assets/SDG/14.png"),
    15: require("../assets/SDG/15.png"),
    16: require("../assets/SDG/16.png"),
    17: require("../assets/SDG/17.png"),
  };

  const sdgValues = itemData["Estimated SDG Impact"]
    .split(",")
    .map((s) => s.trim());

  const filteredSDGValues = sdgValues;

  return (
    <View style={styles.homepage10}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={styles.frameWrapper}>
          <ScrollView
            style={[styles.frameParent, styles.frameChildPosition]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View style={[styles.frame, styles.frameFlexBox]}>
              <View style={styles.image53Parent}>
                <Image
                  style={styles.image53Icon}
                  contentFit="cover"
                  source={require("../assets/image-53.png")}
                />
                <Text style={[styles.solarThermal, styles.solarThermalTypo]}>
                  {itemData["Project Type"]}
                </Text>
              </View>
              <View style={[styles.image54Parent, styles.parentBorder]}>
                <Image
                  style={styles.image53Icon}
                  contentFit="cover"
                  source={require("../assets/image-54.png")}
                />
                <Text style={[styles.solarThermal, styles.solarThermalTypo]}>
                  {itemData["Project Status"]}
                </Text>
              </View>
              <View style={styles.parentBorder}>
                <Text style={[styles.text, styles.textFlexBox]}>
                  {itemData["Annual Estimated Credits"]}
                </Text>
                <Text
                  style={[
                    styles.annualEstimatedCredits,
                    styles.solarThermalTypo,
                  ]}
                >
                  Annual Estimated credits
                </Text>
              </View>
            </View>
            <View style={[styles.frame1, styles.frameLayout]}>
              <Text style={[styles.estimatedSdgImpact, styles.text1Typo]}>
                Estimated SDG Impact
              </Text>
            </View>

            <View
              style={[
                styles.sustainableDevelopmentGoalsParent,
                styles.parentFlexBox,
              ]}
            >
              {filteredSDGValues.map(
                (sdg, index) =>
                  SDGImages[sdg] && (
                    <Image
                      key={index}
                      style={styles.sustainableDevelopmentGoalsIcon}
                      contentFit="cover"
                      source={SDGImages[sdg]}
                    />
                  )
              )}
            </View>

            <Pressable style={[styles.frame2, styles.frameFlexBox]}
            onPress={() => navigation.navigate("NormalPayment")}>
              <Text style={[styles.donate, styles.donateTypo]}>Donate</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate("ProjectImpackFeedback", {
                  itemData: itemData,
                  imageName: imageName,
                })
              }
              style={[styles.frameGroup, styles.parentFlexBox]}
            >
              <View>
                <View style={styles.timesDonatedWrapper}>
                  <Text
                    style={[styles.timesDonated, styles.emitlessTypo]}
                  >{`Times Donated`}</Text>
                </View>
              </View>

              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-1924.png")}
                />
                <Text style={[styles.text1, styles.text1Typo]}>2</Text>
              </View>

              <View style={[styles.viewImpactWrapper, styles.frameFlexBox]}>
                <Text style={[styles.viewImpact, styles.donateTypo]}>
                  View Impact
                </Text>
              </View>
            </Pressable>
            <View style={[styles.frame3, styles.frameLayout]}>
              <Text style={[styles.theProjectActivty, styles.navbarPosition]}>
                {itemData["Description"]}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            styles.mwpBundledSolarPhotovoltaicParent,
            styles.parentFlexBox,
          ]}
        >
          <Text style={[styles.mwpBundledSolar, styles.text1Typo]}>
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
      </View>

      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.navbarChild, styles.navbarChildPosition]} />
        <View style={[styles.homeButtonParent, styles.frameFlexBox]}>
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
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-251.png")}
        />
        <Text
          style={[styles.emitless, styles.emitlessTypo]}
        >{`EmitLess `}</Text>
      </View>
      <Image
        style={styles.homepage10Child}
        contentFit="cover"
        source={images[imageName]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameChildPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  solarThermalTypo: {
    width: 91,
    fontSize: FontSize.size_4xs,
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  parentBorder: {
    marginLeft: 23,
    height: 100,
    borderWidth: 1,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    width: 345,
    marginTop: 16,
    overflow: "hidden",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  donateTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  emitlessTypo: {
    color: Color.colorTeal,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout: {
    height: 65,
    width: 65,
  },
  navbarPosition: {
    left: 0,
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
    backgroundColor: "#eff2f2",
    height: 589,
    left: 0,
    position: "absolute",
    top: 0,
    width: 390,
  },
  image53Icon: {
    width: 40,
    height: 40,
  },
  solarThermal: {
    marginTop: 9.97,
    height: 26,
  },
  image53Parent: {
    height: 100,
    borderWidth: 1,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image54Parent: {
    width: 92,
  },
  text: {
    width: 90,
    height: 43,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    display: "flex",
  },
  annualEstimatedCredits: {
    marginTop: 10,
    height: 26,
  },
  frame: {
    width: 319,
  },
  estimatedSdgImpact: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 0,
    position: "absolute",
    top: 0,
  },
  frame1: {
    marginTop: 16,
    height: 23,
  },
  sustainableDevelopmentGoalsIcon: {
    width: 75,
    height: 75,
  },
  sustainableDevelopmentGoalsParent: {
    width: 334,
    marginTop: 16,
    justifyContent: "space-between",
  },
  donate: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  frame2: {
    borderRadius: 100,
    backgroundColor: "rgba(1, 66, 71, 0.31)",
    width: 96,
    marginTop: 16,
    height: 40,
    overflow: "hidden",
  },
  timesDonated: {
    width: 86,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  timesDonatedWrapper: {
    justifyContent: "flex-end",
  },
  groupChild: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 26,
    left: 28,
    fontSize: 10,
    width: 8,
    height: 11,
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupParent: {
    marginLeft: 40,
  },
  viewImpact: {
    height: 53,
    width: 86,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_lg,
  },
  viewImpactWrapper: {
    alignSelf: "stretch",
    backgroundColor: "#b6e7ea",
    borderRadius: Border.br_xl,
    marginLeft: 40,
    width: 86,
  },
  frameGroup: {
    width: 317,
    height: 72,
    marginTop: 16,
  },
  theProjectActivty: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 331,
    fontSize: 16,
    color: Color.colorBlack,
    textAlign: "center",
    top: 0,
  },
  frame3: {
    height: 270,
    marginTop: 16,
  },
  frameParent: {
    flex: 1,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  frameWrapper: {
    top: 113,
    width: 346,
    height: 406,
    justifyContent: "space-between",
    alignItems: "center",
    left: 22,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  mwpBundledSolar: {
    fontSize: 17,
    width: 284,
    textAlign: "left",
    color: Color.colorBlack,
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
    justifyContent: "space-between",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -195,
    top: 255,
    left: "50%",
    height: 590,
    width: 390,
    position: "absolute",
  },
  navbarChild: {
    backgroundColor: Color.colorPowderblue_100,
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
  },
  frameItem: {
    width: 26,
    height: 26,
  },
  emitless: {
    marginLeft: 2.99,
    fontSize: 16,
    textAlign: "left",
  },
  ellipseParent: {
    top: 43,
    width: 101,
    height: 26,
    left: 22,
    flexDirection: "row",
    position: "absolute",
  },
  homepage10Child: {
    top: 73,
    left: 26,
    width: 338,
    height: 182,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  homepage10: {
    backgroundColor: "#fff",
    height: 1042,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomePage10;
