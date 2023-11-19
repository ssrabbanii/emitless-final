const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage2 from "./screens/HomePage2";
import Frame from "./components/Frame";
import Frame2 from "./components/Frame2";
import FrameComponent from "./components/Frame20167777";
import Frame1 from "./components/Frame1";
import FrameComponent1 from "./components/Frame2016453534";
import Frame3 from "./components/Frame3";
import Navbar from "./components/Navbar";
import GiftCardPayment from "./screens/GiftCardPayment";
import GiftCardPayment1 from "./screens/GiftCardPayment";
import PaymentSuccessful from "./components/PaymentSuccessful";
import NormalPayment from "./screens/NormalPayment";
import ProjectImpackFeedback from "./screens/ProjectImpackFeedback";
import ProjectDescription from "./screens/ProjectDescription";
import HomePage9 from "./screens/HomePage9";
import HomePage8 from "./screens/HomePage8";
import HomePage7 from "./screens/HomePage7";
import HomePage5 from "./screens/HomePage5";
import Itinerary from "./screens/Itinerary";
import FrameScreen from "./screens/FrameScreen";
import StartPage from "./screens/StartPage";
import SustainableDevelopmentGoals from "./components/SustainableDevelopmentGoals";
import SustainableDevelopmentGoals1 from "./components/SustainableDevelopmentGoals1";
import SustainableDevelopmentGoals2 from "./components/SustainableDevelopmentGoals2";
import SustainableDevelopmentGoals3 from "./components/SustainableDevelopmentGoals3";
import SustainableDevelopmentGoals4 from "./components/SustainableDevelopmentGoals4";
import SustainableDevelopmentGoals5 from "./components/SustainableDevelopmentGoals5";
import SustainableDevelopmentGoals6 from "./components/SustainableDevelopmentGoals6";
import SustainableDevelopmentGoals7 from "./components/SustainableDevelopmentGoals7";
import SustainableDevelopmentGoals8 from "./components/SustainableDevelopmentGoals8";
import SustainableDevelopmentGoals9 from "./components/SustainableDevelopmentGoals9";
import SustainableDevelopmentGoals10 from "./components/SustainableDevelopmentGoals10";
import SustainableDevelopmentGoals11 from "./components/SustainableDevelopmentGoals11";
import SustainableDevelopmentGoals12 from "./components/SustainableDevelopmentGoals12";
import SustainableDevelopmentGoals13 from "./components/SustainableDevelopmentGoals13";
import SustainableDevelopmentGoals14 from "./components/SustainableDevelopmentGoals14";
import SustainableDevelopmentGoals15 from "./components/SustainableDevelopmentGoals15";
import SustainableDevelopmentGoals16 from "./components/SustainableDevelopmentGoals16";
import HomePage10 from "./screens/HomePage10";
import Payment from "./components/Payment";
import CarconCredits from "./components/CarconCredits";
import MapsButton from "./components/MapsButton";
import HomeButton from "./components/HomeButton";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Frame11 from "./screens/Frame1";
import Frame31 from "./screens/Frame3";
import Frame111 from "./components/Frame11";
import HomePage81 from "./screens/HomePage81";
import EcoShare from "./screens/EcoShare";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Overpass-Medium": require("./assets/fonts/Overpass-Medium.ttf"),
    "Overpass-Bold": require("./assets/fonts/Overpass-Bold.ttf"),
    "Overpass-Black": require("./assets/fonts/Overpass-Black.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="StartPage"
                component={StartPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage2"
                component={HomePage2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame"
                component={Frame}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame2"
                component={Frame2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FrameComponent"
                component={FrameComponent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame1"
                component={Frame1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FrameComponent1"
                component={FrameComponent1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame3"
                component={Frame3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GiftCardPayment"
                component={GiftCardPayment}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GiftCardPayment1"
                component={GiftCardPayment1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NormalPayment"
                component={NormalPayment}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProjectImpackFeedback"
                component={ProjectImpackFeedback}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProjectDescription"
                component={ProjectDescription}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage9"
                component={HomePage9}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage8"
                component={HomePage8}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage7"
                component={HomePage7}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage5"
                component={HomePage5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Itinerary"
                component={Itinerary}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FrameScreen"
                component={FrameScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage10"
                component={HomePage10}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Group"
                component={Group}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Group1"
                component={Group1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame11"
                component={Frame11}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame31"
                component={Frame31}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame111"
                component={Frame111}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage81"
                component={HomePage81}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EcoShare"
                component={EcoShare}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
