import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../Style";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"];

const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <Feather name="sun" size={24} style={colors.darkHl} />
        <View style={{ marginLeft: 18 }}>
          <Text style={styles.title}>22°</Text>
          <Text style={styles.subTitle}>Sunny</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>
          8.4
          <Text style={[styles.subTitle, { paddingLeft: 8 }]}>
            {" "}
            &nbsp;&nbsp; +6k Votes{" "}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    ...gs.sectionContainer,
    paddingVertical: 20,
    justifyContent: "flex-start",
  },
  weatherContainer: {
    ...gs.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightColor: "#444",
    borderRightWidth: 1,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.textSec,
    fontSize: 10,
    fontWeight: "bold",
  },
});
// https://youtu.be/G--C3nZTgIM?list=PLqtWgQ5BRLPtIubC5hxxtwHISYGxfqBe1&t=1276
