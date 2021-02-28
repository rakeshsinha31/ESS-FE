import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

const AuthLoadingScreen = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color="#red" />
    </View>
  );
};

export default AuthLoadingScreen;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
});
