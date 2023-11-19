import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const Frame31 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.donationsParent}
      onPress={() => navigation.navigate("HomePage2")}
    >
      <Text style={styles.donations}>Donations</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  donations: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  donationsParent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
});

export default Frame31;
