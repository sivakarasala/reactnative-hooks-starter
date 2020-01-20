import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    backgroundColor: "red",
    height: 50,
    width: 50
  },
  viewTwoStyle: {
    backgroundColor: "green",
    height: 50,
    width: 50,
    top: 50
  },
  viewThreeStyle: {
    backgroundColor: "purple",
    height: 50,
    width: 50
  }
});

export default BoxScreen;
