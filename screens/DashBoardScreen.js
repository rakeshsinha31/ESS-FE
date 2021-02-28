import React from "react";
import { StyleSheet, ActivityIndicator, View, Button } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={style.container}>
      <Button title={"Logout"}></Button>
    </View>
  );
};

export default DashboardScreen;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
});
