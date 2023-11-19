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
import { Color, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={[styles.scrollview, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.rectangleLayout}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>UAE</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX560
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              UAE Ocean
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>
              Abu Dhabi
            </Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-1924.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>980</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>UAE</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX560
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              UAE Ocean
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>
              Abu Dhabi
            </Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19241.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>980</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>France</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX690
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              Green Life
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Paris</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19242.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>820</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch2.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>China</Text>
              <Text
                style={[styles.flightCx560, styles.uaeTypo]}
              >{`FLIGHT CX889 `}</Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              China EcoX
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Shanghai</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19243.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>670</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch3.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>UAE</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX560
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              UAE Ocean
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>
              Abu Dhabi
            </Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19244.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>980</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch4.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>France</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX690
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              Green Life
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Paris</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19245.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>820</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch5.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/rectangle-301.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>China</Text>
              <Text
                style={[styles.flightCx560, styles.uaeTypo]}
              >{`FLIGHT CX889 `}</Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              China EcoX
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Shanghai</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19246.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>670</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch6.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>France</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX690
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              Green Life
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Paris</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19247.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>820</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch7.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>France</Text>
              <Text style={[styles.flightCx560, styles.uaeTypo]}>
                FLIGHT CX690
              </Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              Green Life
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Paris</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19248.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>820</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch8.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <Image
          style={styles.groupChildLayout}
          contentFit="cover"
          source={require("../assets/rectangle-302.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.uaeParent}>
              <Text style={[styles.uae, styles.uaeLayout]}>China</Text>
              <Text
                style={[styles.flightCx560, styles.uaeTypo]}
              >{`FLIGHT CX889 `}</Text>
            </View>
            <Text style={[styles.uaeOcean, styles.uaeOceanTypo]}>
              China EcoX
            </Text>
            <Text style={[styles.abuDhabi, styles.uaeOceanTypo]}>Shanghai</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-19249.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>670</Text>
          </View>
          <Pressable style={styles.ecoShareParent} 
          onPress={() => navigation.navigate("EcoShare")}>
            <Text style={[styles.ecoShare, styles.textTypo]}>Eco-Share</Text>
            <Image
              style={styles.launchIcon}
              contentFit="cover"
              source={require("../assets/launch9.png")}
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
  groupChildLayout: {
    borderRadius: 20,
    left: 0,
    top: 0,
    position: "absolute",
    height: 94,
    width: 344,
  },
  uaeLayout: {
    height: 22,
    fontSize: 20,
  },
  uaeTypo: {
    textAlign: "left",
    color: Color.colorTeal_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  uaeOceanTypo: {
    marginTop: 1.99,
    textAlign: "left",
    color: Color.colorTeal_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout: {
    width: 65,
    height: 65,
  },
  textTypo: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  rectangleLayout: {
    height: 94,
    width: 344,
  },
  groupChild: {
    backgroundColor: Color.colorTeal_200,
  },
  uae: {
    width: 74,
    textAlign: "left",
    color: Color.colorTeal_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  flightCx560: {
    fontSize: 7,
    width: 52,
    height: 9,
  },
  uaeParent: {
    justifyContent: "flex-end",
  },
  uaeOcean: {
    width: 117,
    height: 22,
    fontSize: 20,
  },
  abuDhabi: {
    fontSize: 12,
    width: 68,
    height: 19,
  },
  groupItem: {
    right: 0,
    top: 0,
    width: 65,
    position: "absolute",
  },
  text: {
    top: 25,
    left: 22,
    color: Color.colorBlack,
    width: 22,
    height: 11,
    position: "absolute",
    fontSize: 10,
  },
  groupParent: {
    marginLeft: 35.91,
  },
  ecoShare: {
    color: Color.colorDarkslategray_100,
    width: 55,
    height: 12,
  },
  launchIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginTop: 3.99,
  },
  ecoShareParent: {
    marginLeft: 35.91,
    alignItems: "center",
  },
  frameParent: {
    top: 14,
    left: 19,
    width: 309,
    flexDirection: "row",
    alignItems: "center",
    height: 65,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 20,
  },
  scrollview: {
    alignSelf: "stretch",
    flex: 1,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
  },
});

export default FrameComponent;
