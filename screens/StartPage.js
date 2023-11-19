import React from 'react';
import { ImageBackground, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("HomePage2")} style={styles.pressable}>
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame2016453593.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  frameIcon: {
    width: '100%',
    height: 844,
  },
});

export default StartPage;
