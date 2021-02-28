import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import RadioGroup from "react-native-radio-buttons-group";

function AdvanceScreen({ navigation }) {
  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: <Text style={{ color: "#FFFFFF" }}>Second Half</Text>,
      value: "advance",
      color: "red",

      containerStyle: { margin: 15 },
    },
    {
      id: "2",
      label: <Text style={{ color: "blue" }}>Second Half</Text>,
      value: "loan",
      color: "red",
      containerStyle: { margin: 15 },
    },
  ];

  const [radioButtons, setRadioButtons] = React.useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.request}>Eligibility</Text>
        <View style={styles.requestRow}>
          <Text
            style={[
              styles.request,
              {
                fontSize: 10,
                fontWeight: "normal",
                marginLeft: "18%",
              },
            ]}
          >
            Maximum Amount
          </Text>
          <Text
            style={[
              styles.request,
              {
                fontSize: 10,
                fontWeight: "normal",
              },
            ]}
          >
            Interest Rate
          </Text>
          <Text
            style={[
              styles.request,
              {
                fontSize: 10,
                fontWeight: "normal",
              },
            ]}
          >
            Maximum Tenure
          </Text>
        </View>
        <View style={styles.requestRow}>
          <Text
            style={[
              styles.request,
              {
                fontSize: 12,
                marginTop: 10,
                marginLeft: 5,
              },
            ]}
          >
            ADVANCE
          </Text>
          <Text style={styles.AvgTime}>{"200000"}</Text>
          <Text style={styles.AvgTime}>{"6.75%"}</Text>
          <Text style={styles.AvgTime}>{"36 Months"}</Text>
        </View>
        <View style={styles.requestRow}>
          <Text style={[styles.request, { fontSize: 12, marginLeft: 30 }]}>
            LOAN
          </Text>
          <Text style={[styles.AvgTime, {}]}>{"500000"}</Text>
          <Text style={styles.AvgTime}>{"7.50%"}</Text>
          <Text style={styles.AvgTime}>{"60 Months"}</Text>
        </View>

        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="column"
        />

        <View style={styles.requestRow}>
          <TextInput
            placeholder="Amount"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
          <Text
            style={[
              styles.request,
              {
                fontSize: 12,
                marginTop: 10,
                marginLeft: 5,
              },
            ]}
          >
            {" "}
            {"Choose Tenure"}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={[styles.AvgTime, { backgroundColor: "#e28e8e" }]}>
            {"APPLY"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AdvanceScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  section: {
    width: "97%",
    backgroundColor: "#FFFFFF",
    margin: "1%",
    borderColor: "#e0dede",
    borderWidth: 1,
    borderRadius: 10,
  },
  request: {
    color: "black",
    fontSize: 12,
    margin: 4,
    fontWeight: "bold",
    marginLeft: 10,
    flexDirection: "row",
  },
  requestRow: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-evenly",
  },
  AvgTime: {
    backgroundColor: "black",
    height: 38,
    width: 100,
    color: "white",
    padding: 7,
    borderRadius: 15,
    textAlign: "center",
  },
  textInput: {
    borderWidth: 0.3,
    width: "70%",
    height: 40,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    paddingLeft: 38,
  },
});
