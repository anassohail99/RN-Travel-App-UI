import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "./Style";
import HotelView from "./Screens/HotelView/index";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <HotelView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
