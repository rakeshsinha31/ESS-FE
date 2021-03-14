import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  const ff = async () => {
    console.log(await AsyncStorage.getItem("userToken"));
  };

  useEffect(() => {
    ff();
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />

      <View style={styles.section}>
        <Text style={styles.request}>Request</Text>

        <View style={styles.requestIconRow}>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Leave")}>
              <MaterialIconsIcon
                name="flight"
                style={styles.icon}
              ></MaterialIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("GatePass")}>
              <MaterialCommunityIconsIcon
                name="forklift"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Attendance")}>
              <MaterialCommunityIconsIcon
                name="gesture-double-tap"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Shift")}>
              <MaterialCommunityIconsIcon
                name="clock-outline"
                style={([styles.icon], { fontSize: 29, color: "#fff" })}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.labelText}>
          <Text style={styles.iconText}>Leave</Text>
          <Text style={styles.iconText}>Gate Pass</Text>
          <Text style={styles.iconText}>Attendance</Text>
          <Text style={styles.iconText}>Shift</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.request}>Finance</Text>

        <View style={styles.requestIconRow}>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Salary")}>
              <MaterialCommunityIconsIcon
                name="file-document-outline"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Arrears")}>
              <MaterialCommunityIconsIcon
                name="currency-inr"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Reimbursement")}
            >
              <MaterialCommunityIconsIcon
                name="bank-transfer-in"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Advance")}>
              <MaterialCommunityIconsIcon
                name="currency-usd"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.labelText}>
          <Text style={styles.iconText}>Salary Slip</Text>
          <Text style={styles.iconText}>Arrears</Text>
          <Text style={styles.iconText}>Reimbusement</Text>
          <Text style={styles.iconText}>Advance</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.request}>Others</Text>

        <View style={styles.requestIconRow}>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Transport")}>
              <MaterialCommunityIconsIcon
                name="car-sports"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate("Suggetions")}>
              <MaterialCommunityIconsIcon
                name="lightbulb-on-outline"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.labelText}>
          <Text style={styles.iconText}>Transport</Text>
          <Text style={styles.iconText}>Suggestions</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  section: {
    width: "97%",
    backgroundColor: "#FFFFFF",
    margin: "2%",
    borderColor: "#e0dede",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  request: {
    color: "black",
    fontSize: 12,
    margin: 10,
    fontWeight: "bold",
  },
  iconView: {
    width: "15%",
    height: 55,
    borderRadius: 21,
    justifyContent: "space-evenly",
    backgroundColor: "#009387",
    padding: 14,
    marginBottom: 5,
  },
  icon: {
    color: "#fff",
    fontSize: 30,
  },
  requestIconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  labelText: {
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-evenly",
    marginBottom: "2%",
  },
  iconText: {
    color: "black",
    fontSize: 10,
    justifyContent: "center",
  },
});
