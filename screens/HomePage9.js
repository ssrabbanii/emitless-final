import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { Input, Icon } from "@ui-kitten/components";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";
import { ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const API_ENDPOINT = `https://retoolapi.dev/2wXPGH/projects`;

const HomePage9 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setFullData(json);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const getCountryCode = (countryName) => {
    const countryCode = {
      Indonesia: "ID",
      Thailand: "TH",
      India: "IN",
      China: "CN",
      "South Africa": "ZA",
      Brazil: "BR",
    };

    return countryCode[countryName];
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();

    if (formattedQuery) {
      const newData = fullData.filter((item) =>
        item.Country.toLowerCase().includes(formattedQuery.toLowerCase())
      );
      setData(newData);
    } else {
      setData(fullData);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#3DC1B2" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in Fetching Data. Please check your Internet Connection!
        </Text>
      </View>
    );
  }
  const navigation = useNavigation();

  return (
    <View style={styles.homePage9}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.searchBar, styles.searchBarFlexBox]}>
          <Input
            style={styles.searchBarChild}
            placeholder="Enter Location"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
            accessoryLeft={<Icon name="search-web" pack="material" />}
            placeholderTextColor="#074c4e"
            textStyle={styles.rectangleTextInputText}
          />
        </View>
        <View style={[styles.frameWrapper, styles.frameChildPosition]}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}

            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              const country_code = getCountryCode(item.Country);
              const imageNames = [
                "rectangle-539.png",
                "rectangle-540.png",
                "rectangle-5391.png",
                "rectangle-5392.png",
                "rectangle-5393.png",
              ];

              const images = {
                "rectangle-539.png": require("../assets/rectangle-539.png"),
                "rectangle-540.png": require("../assets/rectangle-540.png"),
                "rectangle-5391.png": require("../assets/rectangle-5391.png"),
                "rectangle-5392.png": require("../assets/rectangle-5392.png"),
                "rectangle-5393.png": require("../assets/rectangle-5393.png"),
              };

              // Select image based on index
              const imageName = imageNames[index % imageNames.length];

              return (
                <Pressable
                  style={styles.rectangleGroup}
                  onPress={() =>
                    navigation.navigate("HomePage10", {
                      itemData: item,
                      imageName: imageName,
                    })
                  }
                >
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={images[imageName]}
                  />
                  <View
                    style={[
                      styles.mwpBundledSolarPhotovoltaicParent,
                      styles.searchBarFlexBox,
                    ]}
                  >
                    <Text style={[styles.mwpBundledSolar, styles.emitlessTypo]}>
                      {item.Project}
                    </Text>
                    <Image
                      style={styles.indonesiaIdIcon}
                      contentFit="cover"
                      source={{
                        uri: `https://flagsapi.com/${country_code}/flat/64.png`,
                      }}
                    />
                  </View>
                </Pressable>
              );
            }}
          />
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
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.ellipseIcon}
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
  rectangleTextInputText: {
    color: "#074c4e",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameChildPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  searchBarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  emitlessTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  navbarPosition: {
    left: 0,
    width: 390,
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
    left: 0,
    width: 390,
    position: "absolute",
    top: 0,
  },
  searchBarChild: {
    top: 10,
    left: 17,
    backgroundColor: "rgba(143, 215, 202, 0.2)",
    width: 356,
    alignSelf: "center",
    zIndex: 0,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  searchBar: {
    height: 65,
    paddingLeft: 16,
    paddingTop: 10,
    paddingRight: 8,
    paddingBottom: 10,
    borderRadius: Border.br_xl,
    left: 0,
    width: 390,
    position: "absolute",
    top: 0,
  },
  frameItem: {
    width: 338,
    height: 182,
    borderRadius: Border.br_xl,
  },
  mwpBundledSolar: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    width: 284,
  },
  indonesiaIdIcon: {
    width: 35,
    height: 35,
    marginLeft: 6,
    overflow: "hidden",
  },
  mwpBundledSolarPhotovoltaicParent: {
    marginTop: 14,
  },
  rectangleGroup: {
    height: 251,
    alignItems: "center",
    borderRadius: Border.br_xl,
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
    borderTopLeftRadius: Border.br_xl,
  },
  frameWrapper: {
    top: 65,
    left: 26,
    height: 681,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -195,
    top: 73,
    left: "50%",
    height: 771,
    width: 390,
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
  homePage9: {
    backgroundColor: Color.colorWhite,
    height: 1500,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  barStyle: {
    borderRadius: 50,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 5,
  },
});

export default HomePage9;
