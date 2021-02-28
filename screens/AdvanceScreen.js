import * as React from "react";
import {
  Alert,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import RadioGroup from "react-native-radio-buttons-group";
import Slider from "@react-native-community/slider";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

function AdvanceScreen({ navigation }) {
  let VALID = true;

  const [data, setData] = React.useState({
    amount: 0,
    tenure: 0,
    check_textInputChange: false,
    isValidAmount: true,
    isValidTenure: true,
  });

  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: <Text style={{ color: "blue" }}></Text>,
      value: "advance",
      color: "black",
      size: 32,
      selected: true,
    },
    {
      id: "2",
      label: <Text style={{ color: "blue" }}></Text>,
      value: "loan",
      color: "black",
      size: 32,
    },
  ];

  const [radioButtons, setRadioButtons] = React.useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const selectedButton = radioButtons.find((e) => e.selected == true);

  const handleAmountChange = (val) => {
    if (val == "" || val == parseInt(val, 10)) {
      if (selectedButton.value == "advance" && val <= 200000) {
        setData({
          ...data,
          amount: val,
          isValidAmount: true,
        });
      } else if (selectedButton.value == "loan" && val <= 500000) {
        setData({
          ...data,
          amount: val,
          isValidAmount: true,
        });
      } else {
        setData({
          ...data,
          amount: val,
          isValidAmount: false,
        });
      }
    } else {
      setData({
        ...data,
        amount: val,
        isValidAmount: false,
      });
    }
  };

  const handleTenureChange = (val) => {
    if (val == "" || val == parseInt(val, 10)) {
      if (selectedButton.value == "advance" && val <= 36) {
        setData({
          ...data,
          tenure: val,
          isValidTenure: true,
        });
      } else if (selectedButton.value == "loan" && val <= 60) {
        setData({
          ...data,
          tenure: val,
          isValidTenure: true,
        });
      } else {
        setData({
          ...data,
          tenure: val,
          isValidTenure: false,
        });
      }
    } else {
      setData({
        ...data,
        tenure: val,
        isValidTenure: false,
      });
    }
  };

  const [amountSliderValue, setAmountSliderValue] = React.useState(0);
  const [tenureSliderValue, setTenureSliderValue] = React.useState(0);
  const [emiState, setEMIState] = React.useState(0);

  const calculateEMI = () => {
    setEMIState(amountSliderValue * tenureSliderValue);
    //return 100;
  };

  const pendingLoanApprovals = [
    {
      employee_name: "Raghu Ram",
      department: "MAINTENANCE",
      amount: 280000,
      roi: 6.75,
      tenure: 36,
    },
  ];
  const createThreeButtonAlert = () =>
    Alert.alert(
      "Take Action",
      "",
      [
        {
          text: "Approve",
          buttons: "confirm",
          onPress: () => console.log("Approve Pressed"),
        },
        {
          text: "Reject",
          onPress: () => console.log("Reject Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );

  const handleApply = () => {
    if (!VALID) {
      alert("Please correct the errors and apply again");
      return false;
    }
    if (data.amount.trim().length == 0 || data.tenure.trim().length == 0) {
      VALID = false;
      alert("Please enter a valid values for Tenure and Amount");
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={([styles.request], { margin: 8 })}>EMI Calculator</Text>
        <View style={styles.slider}>
          <TextInput
            placeholder="Amount"
            placeholderTextColor="#666666"
            style={([styles.textInput], { width: 55, marginStart: 10 })}
          />
          <Slider
            style={{ marginRight: 15, width: "60%" }}
            minimumValue={10000}
            maximumValue={500000}
            step={1000}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#009387"
            value={amountSliderValue}
            onValueChange={(amountSliderValue) =>
              setAmountSliderValue(amountSliderValue)
            }
            onSlidingComplete={(amountSliderValue, tenureSliderValue) =>
              calculateEMI(amountSliderValue, tenureSliderValue)
            }
          />
          <Text style={{ marginTop: 4 }}>{amountSliderValue}</Text>
        </View>

        <View style={styles.slider}>
          <TextInput
            placeholder="Tenure"
            placeholderTextColor="#666666"
            style={([styles.textInput], { width: 55, marginStart: 10 })}
          />
          <Slider
            style={{ marginRight: 15, width: "60%" }}
            minimumValue={1}
            maximumValue={60}
            step={1}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#009387"
            value={tenureSliderValue}
            onValueChange={(tenureSliderValue) =>
              setTenureSliderValue(tenureSliderValue)
            }
            onSlidingComplete={(amountSliderValue, tenureSliderValue) =>
              calculateEMI(amountSliderValue, tenureSliderValue)
            }
          />
          <Text style={{ marginTop: 4 }}>
            {tenureSliderValue} {"Months"}
          </Text>
        </View>
        <Text style={[styles.AvgTime, { margin: 10, width: "95%" }]}>
          {"Monthly Inatallment: "} {emiState}
        </Text>
      </View>
      <View style={styles.group}>
        <View style={styles.section2}>
          <Text style={([styles.request], { margin: 6 })}>Apply</Text>
          <View style={styles.requestRow}>
            <Text
              style={[
                styles.request,
                {
                  fontSize: 10,
                  fontWeight: "normal",
                  marginLeft: "12%",
                },
              ]}
            >
              Max Amount
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
              Max Tenure
            </Text>
          </View>
          <View style={styles.requestRow}>
            <Text
              style={[
                styles.request,
                {
                  fontSize: 12,
                  marginTop: 10,
                  fontWeight: "normal",
                  color: "#666666",
                },
              ]}
            >
              ADV.
            </Text>
            <Text style={styles.AvgTime}>{"200000"}</Text>
            <Text style={styles.AvgTime}>{"6.75%"}</Text>
            <Text style={styles.AvgTime}>{"36"}</Text>
          </View>
          <View style={styles.requestRow}>
            <Text
              style={[
                styles.request,
                {
                  fontSize: 12,
                  fontWeight: "normal",
                  color: "#666666",
                  marginTop: 10,
                },
              ]}
            >
              LOAN
            </Text>
            <Text style={[styles.AvgTime, {}]}>{"500000"}</Text>
            <Text style={styles.AvgTime}>{"7.50%"}</Text>
            <Text style={styles.AvgTime}>{"60"}</Text>
          </View>

          <View
            style={[
              styles.requestRow,
              { justifyContent: "space-evenly", margin: 10 },
            ]}
          >
            <TextInput
              placeholder="Tenure"
              placeholderTextColor="#666666"
              style={styles.textInput}
              onChangeText={(val) => handleTenureChange(val)}
            />
            <TextInput
              placeholder="Amount"
              placeholderTextColor="#666666"
              style={styles.textInput}
              onChangeText={(val) => handleAmountChange(val)}
            />
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => handleApply()}
            >
              <Text
                style={[
                  styles.AvgTime,
                  { backgroundColor: "#e28e8e", width: "100%", height: "100%" },
                ]}
              >
                {"APPLY"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section1}>
          <View style={{ marginTop: 34 }}>
            <Text
              style={[
                styles.request,
                {
                  marginLeft: -5,
                  fontSize: 11,
                  fontWeight: "normal",
                },
              ]}
            >
              Select
            </Text>
          </View>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="column"
            />
          </View>
        </View>
      </View>

      <View style={styles.requestRow}>
        {data.isValidAmount
          ? null
          : ((VALID = false),
            (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Amount should be Integer and not more than Max Amount
                </Text>
              </Animatable.View>
            ))}

        {data.isValidTenure
          ? null
          : ((VALID = false),
            (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Tenure should be Integer and not more than Max Tenure
                </Text>
              </Animatable.View>
            ))}
      </View>

      <View style={styles.section}>
        <Text style={([styles.request], { margin: 6 })}>Pending Approvals</Text>
        <View style={{ justifyContent: "space-around" }}>
          {pendingLoanApprovals.map((prop, key) => {
            return (
              <TouchableOpacity onLongPress={() => createThreeButtonAlert()}>
                <View style={styles.appliedLeaveRow}>
                  <View style={styles.label}>
                    <Text>{prop.employee_name}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text>{prop.amount}</Text>
                  </View>
                  <View>
                    <Text style={styles.leaveTypeButton}>{prop.roi}</Text>
                  </View>
                  <View>
                    <Text style={styles.leaveTypeButton}>{prop.tenure}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
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
  group: {
    flexDirection: "row",
  },
  section: {
    width: "97%",
    backgroundColor: "#FFFFFF",
    margin: "1%",
    borderColor: "#e0dede",
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
  },
  section2: {
    width: "88%",
    backgroundColor: "#FFFFFF",
    borderLeftColor: "#e0dede",
    borderLeftWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  section1: {
    width: "9%",
    alignContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRightColor: "#e0dede",
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  request: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 2,
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
    width: 80,
    color: "white",
    padding: 7,
    borderRadius: 10,
    textAlign: "center",
  },
  textInput: {
    borderWidth: 0.3,
    width: "30%",
    height: 40,
    borderRadius: 10,
    textAlign: "center",
  },
  slider: {
    width: "97%",
    flexDirection: "row",
  },
  label: {
    color: "red",
    borderWidth: 0.3,
    width: 100,
    alignItems: "center",
    borderRadius: 3,
    margin: 8,
  },
  leaveTypeButton: {
    backgroundColor: "black",
    height: 40,
    width: 40,
    color: "white",
    padding: 4,
    borderRadius: 20,
    textAlign: "center",
  },
  appliedLeaveRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 10,
  },
});
