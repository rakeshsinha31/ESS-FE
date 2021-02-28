import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialHeader1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {props.value}
        </Text>
      </View>
      <View>
        <MaterialCommunityIconsIcon
          name="account-circle"
          style={styles.account}
        ></MaterialCommunityIconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#111",
  },
  textWrapper: {},
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  account: {
    color: "#fff",
    fontSize: 40,
  },
});

export default MaterialHeader1;
