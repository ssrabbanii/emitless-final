import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const Navbar = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  navbarChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
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
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    width: 390,
    height: 81,
  },
});

export default Navbar;
