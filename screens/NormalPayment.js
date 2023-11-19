import * as React from "react";
import { Alert, Modal, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { Border, FontFamily, Color, Padding, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";
const NormalPayment = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const closeSth = () => {
    navigation.navigate("EcoShare");
  };
  

  const closeModal = () => {
    setModalVisible(false);
};
const closeAll = () => {
  closeModal();
  closeSth();
};
  return (

    
    <View style={styles.normalPayment}>
      <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={styles.closeButton}
                            onPress={closeModal}
                        >
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                        <View style={styles.paySuccess}>
                          <Text style={styles.paySuccessTypo}>Payment Successful</Text>
                        </View>

                        <Pressable
                            style={styles.button}
                            onPress={() => closeAll()}
                        >
                            <Text style={styles.textStyle}>Eco-Share</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            </View>






      <View style={[styles.rectangleParent, styles.navbarPosition]}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <View style={styles.paymentParent}>
          <Text style={styles.payment}>Choose Contribution Type</Text>
          <View style={styles.frameParent}>
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/frame-3.png")}
              />
              <View style={styles.paymentFlexBox}>
                <Text style={[styles.payment1, styles.paymentTypo]}>
                  Trip-equivalent HKD
                </Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/frame-4.png")}
              />
              <View style={[styles.paymentContainer, styles.paymentFlexBox]}>
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
          <View style={styles.paymentFrame}>
            <Text style={styles.payment}>Select Offset Payment Method</Text>
          </View>
          <View style={styles.frameView}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-32.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={[styles.payment4, styles.paymentTypo]}>
                Saved Cards
              </Text>
            </View>
          </View>
          <Image
            style={styles.group1266671}
            contentFit="cover"
            source={require("../assets/group-126667-11.png")}
          />
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-41.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment5}>Redeem Asia Miles</Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-41.png")}
            />
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/apple-pay1.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment5}>Apple Pay</Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-41.png")}
            />
            <Image
              style={[styles.paypalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/paypal1.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment5}>PayPal</Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-41.png")}
            />
            <Image
              style={[styles.paypalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/alipay1.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment5}>Alipay</Text>
            </View>
          </View>
          <View style={styles.frameParentFlexBox}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/frame-41.png")}
            />
            <View style={styles.paymentFlexBox}>
              <Text style={styles.payment5}>Redeem Gift Card</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.frameParent6Position]}>
          <View style={styles.rectangleView} />
          <View style={[styles.frameParent6, styles.frameParent6Position]}>
            <View style={styles.equivalentParentFlexBox}>
              <Text style={styles.tonnesTypo}>Equivalent Carbon Emission</Text>
              <Text style={[styles.tonnes, styles.tonnesTypo]}>
                4.46 Tonnes
              </Text>
            </View>
            <View
              style={[
                styles.equivalentHkdParent,
                styles.equivalentParentFlexBox,
              ]}
            >
              <Text style={styles.tonnesTypo}>Equivalent HKD</Text>
              <Text style={styles.tonnesTypo}>292.71 HKD</Text>
            </View>
            <View
              style={[
                styles.equivalentHkdParent,
                styles.equivalentParentFlexBox,
              ]}
            >
              <Text style={styles.tonnesTypo}>Asia Miles</Text>
              <Text style={styles.tonnesTypo}>7216</Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.payWrapper} onPress={() => setModalVisible(true)}>
          <Text style={[styles.pay, styles.payTypo]}>PAY</Text>
        </Pressable>
      </View>

      

      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.navbarChild, styles.navbarChildPosition]} />
        <View style={styles.homeButtonParent}>
          <Image
            style={styles.homeButtonIcon}
            contentFit="cover"
            source={require("../assets/home-button1.png")}
          />
          <Image
            style={styles.paymentIcon}
            contentFit="cover"
            source={require("../assets/payment1.png")}
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
  frameFlexBox: {
    width: 228,
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
  paymentFlexBox: {
    marginLeft: 13.96,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParentFlexBox: {
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
  frameParent6Position: {
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  tonnesTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.overpassMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: 14,
  },
  equivalentParentFlexBox: {
    width: 307,
    alignItems: "center",
    flexDirection: "row",
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
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  paymentContainer: {
    justifyContent: "center",
  },
  frameContainer: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
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
  paymentFrame: {
    width: 254,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 7,
  },
  payment4: {
    width: 80,
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 7,
  },
  group1266671: {
    height: 138,
    marginTop: 7,
    width: 364,
  },
  payment5: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: -1,
  },
  frameParent1: {
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
  tonnes: {
    marginLeft: 52,
  },
  equivalentHkdParent: {
    marginTop: 4,
    justifyContent: "space-between",
  },
  frameParent6: {
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
    height: "33.33%",
    width: "81.9%",
    top: "27.16%",
    right: "8.87%",
    bottom: "39.51%",
    left: "9.23%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  normalPayment: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: Color.colorTeal_100,
},
closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: 'red',
    borderRadius: 20
},
textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
},
paySuccess: {
  padding: 30,
  fontWeight: 'bold',
},
paySuccessTypo: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    fontWeight: "700",

}
});

export default NormalPayment;
