import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Shiva"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Shambho"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={8}
      />
      <ImageDetail
        title="Shankara"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
