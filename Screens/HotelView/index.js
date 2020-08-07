import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../Style";
import Header from "./Components/Header";
import BookMark from "./Components/BookMark";
import About from "./Components/About";
import Stats from "./Components/Stats";

const HotelView = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <BookMark />
        <About />
        <Stats />
      </View>
    </View>
  );
};

export default HotelView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
