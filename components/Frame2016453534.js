import * as React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const FrameComponent1 = ({ style }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={[styles.scrollview, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.groupLayout}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 237</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - LHR</Text>
          </View>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192410.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>80%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch10.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 663</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - JFK</Text>
          </View>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192411.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>33%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch11.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 844</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - JFK</Text>
          </View>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192412.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>100%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch12.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 237</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - LHR</Text>
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192413.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>80%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch13.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 663</Text>
            </View>
            <Text style={styles.hkgTypo}>
              <Text style={styles.hkg}>{`HKG - `}</Text>
              <Text style={styles.cdg}>CDG</Text>
            </Text>
          </View>
          <View style={[styles.groupParent2, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192414.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>33%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch14.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 844</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - JFK</Text>
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192415.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>100%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch15.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 237</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - LHR</Text>
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192416.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>80%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch16.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 663</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - BOM</Text>
          </View>
          <View style={[styles.groupParent2, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192417.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>33%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch17.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.flightParent}>
              <Text style={[styles.flight, styles.cx237Typo]}>FLIGHT</Text>
              <Text style={[styles.cx237, styles.cx237Typo]}>CX 844</Text>
            </View>
            <Text style={[styles.hkgLhr, styles.hkgTypo]}>HKG - JFK</Text>
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <Image
              style={[styles.groupItem, styles.groupParentLayout]}
              contentFit="cover"
              source={require("../assets/group-192418.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>100%</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={styles.ecoShare}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch18.png")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  cx237Typo: {
    textAlign: "left",
    color: Color.colorTeal_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  textTypo: {
    height: 11,
    color: Color.colorBlack,
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 94,
    width: 344,
  },
  groupChild: {
    left: 0,
    borderRadius: 20,
    backgroundColor: Color.colorTeal_200,
    height: 94,
    width: 344,
  },
  flight: {
    fontSize: 7,
    height: 9,
    width: 26,
  },
  cx237: {
    width: 74,
    height: 22,
    marginTop: -3.99,
    fontSize: 20,
  },
  flightParent: {
    justifyContent: "flex-end",
  },
  hkgLhr: {
    fontSize: 20,
  },
  frameGroup: {
    width: 110,
  },
  groupItem: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    width: 22,
    left: 22,
    top: 25,
    height: 11,
    color: Color.colorBlack,
  },
  groupParent: {
    marginLeft: 40,
  },
  ecoShare: {
    color: Color.colorDarkslategray_100,
    width: 55,
    height: 12,
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  launchIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginTop: 3.99,
  },
  ecoShareParent: {
    marginLeft: 40,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -153.05,
    top: 14,
    left: "50%",
    width: 309,
    flexDirection: "row",
    alignItems: "center",
    height: 65,
    position: "absolute",
  },
  text1: {
    width: 21,
    left: 22,
    top: 25,
    height: 11,
    color: Color.colorBlack,
  },
  rectangleGroup: {
    marginTop: 20,
  },
  text2: {
    top: 26,
    left: 20,
    width: 26,
  },
  groupParent1: {
    marginLeft: 39.9,
  },
  ecoShareParent1: {
    marginLeft: 39.9,
    alignItems: "center",
  },
  hkg: {
    fontSize: 20,
  },
  cdg: {
    fontSize: FontSize.size_lgi,
  },
  groupParent2: {
    marginLeft: 38.9,
  },
  ecoShareParent2: {
    marginLeft: 38.9,
    alignItems: "center",
  },
  scrollview: {
    alignSelf: "stretch",
    flex: 1,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
  },
});

export default FrameComponent1;
