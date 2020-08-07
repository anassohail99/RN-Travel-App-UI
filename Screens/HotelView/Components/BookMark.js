import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { gs, colors } from "../../../Style";

const BookMark = () => {
  return (
    <View style={styles.bookmark}>
      <Feather
        name="bookmark"
        size={30}
        color={colors.pink}
        // style={{ zIndex: 99 }}
      />
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  bookmark: {
    // position: "real",
    width: 60,
    height: 60,
    right: "-75%",
    top: -60 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 60 / 2,
    zIndex: 10,
  },
});
