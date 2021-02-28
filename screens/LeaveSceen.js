import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialButtonDark from "../components/MaterialButtonDark";
import DatePicker from "react-native-datepicker";
import RadioGroup from "react-native-radio-buttons-group";

function LeaveScreen({ navigation }) {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: <Text style={{ color: "#FFFFFF" }}>First Half</Text>,
      value: "first",
      color: "#fff",

      containerStyle: { margin: 15 },
    },
    {
      id: "2",
      label: <Text style={{ color: "#FFFFFF" }}>Second Half</Text>,
      value: "second",
      color: "#fff",
      containerStyle: { margin: 15 },
    },
  ];

  const radioButtonsData1 = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: (
        <Text style={{ color: "#FFFFFF" }}>
          {"EL            "} {"10"}
        </Text>
      ),
      selected: true,
      value: "EL",
      color: "white",
      size: 16,
      containerStyle: { margin: 15 },
    },
    {
      id: "2",
      label: (
        <Text style={{ color: "#FFFFFF" }}>
          {"CL             "} {"5"}
        </Text>
      ),
      value: "CL",
      color: "white",
      size: 16,
      containerStyle: { margin: 15 },
    },
    {
      id: "3",
      label: (
        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          {"SL             "} {"9"}
        </Text>
      ),
      value: "SL",
      color: "white",
      size: 16,
      containerStyle: { margin: 15 },
    },
  ];
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [radioButtons1, setRadioButtons1] = useState(radioButtonsData1);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  function onPressRadioButton1(radioButtonsArray) {
    setRadioButtons1(radioButtonsArray);
  }

  const appliedLeaves = [
    {
      id: 1,
      from: "22/02/2021",
      to: "28/02/2021",
      leaveType: "EL",
      days: 2,
      status: "Approved",
    },
    {
      id: 2,
      from: "29/02/2021",
      to: "29/02/2021",
      leaveType: "CL",
      days: 2,
      status: "Pending",
    },
    {
      id: 2,
      from: "29/02/2021",
      to: "29/02/2021",
      leaveType: "SL",
      days: 2,
      status: "Rejected",
    },
  ];

  const pendingApprovals = [
    {
      employee_name: "Raghu Ram",
      department: "MAINTENANCE",
      from: "26/02/2021",
      to: "29/02/2021",
      leaveType: "CL",
      days: 3,
    },
    {
      employee_name: "Amit Joshi",
      department: "MAINTENANCE",
      from: "21/02/2021",
      to: "23/02/2021",
      leaveType: "CL",
      days: 2,
    },
    {
      employee_name: "Ramdhani",
      department: "MAINTENANCE",
      from: "17/02/2021",
      to: "29/02/2021",
      leaveType: "CL",
      days: 12,
    },
    {
      employee_name: "Ranju Sam ",
      department: "Administration",
      from: "04/03/2021",
      to: "17/03/2021",
      leaveType: "EL",
      days: 11,
    },
    {
      employee_name: "Pappu Yadav",
      department: "MAINTENANCE",
      from: "04/03/2021",
      to: "04/03/2021",
      leaveType: "SH",
      days: 0.5,
    },
    {
      employee_name: "Raghu Ram",
      department: "MAINTENANCE",
      from: "26/02/2021",
      to: "26/02/2021",
      leaveType: "FH",
      days: 0.5,
    },
    {
      employee_name: "Pappu Yadav",
      department: "MAINTENANCE",
      from: "04/03/2021",
      to: "04/03/2021",
      leaveType: "SH",
      days: 0.5,
    },
    {
      employee_name: "Raghu Ram",
      department: "MAINTENANCE",
      from: "26/02/2021",
      to: "26/02/2021",
      leaveType: "FH",
      days: 0.5,
    },
  ];

  const renderStatus = (leaveStatus, id) => {
    switch (leaveStatus) {
      case "Approved":
        return (
          <Icon
            name="check-circle-outline"
            style={[styles.icon, { color: "green" }]}
          />
        );
      case "Rejected":
        return (
          <Icon
            name="close-circle-outline"
            style={[styles.icon, { color: "orange" }]}
          />
        );
      case "Pending":
        return (
          <TouchableOpacity onLongPress={() => alert(id)}>
            <Icon
              name="delete-circle-outline"
              style={[styles.icon, { color: "red" }]}
            />
          </TouchableOpacity>
        );
    }
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.request}>Apply</Text>
        <View style={styles.selectHalfLeave}>
          <Text
            style={
              (styles.label, { color: "white", marginLeft: 6, marginTop: 3 })
            }
          >
            Half Day?
          </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>
        <View style={styles.requestIconRow}>
          <View>
            <DatePicker
              style={styles.datePickerStyle}
              date={date1} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="From"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 10,
                  tintColor: "#009387",
                },
                dateInput: {
                  margin: "18%",
                  borderRadius: 8,
                },
              }}
              onDateChange={(date1) => {
                setDate1(date1);
              }}
            />
            <DatePicker
              style={styles.datePickerStyle}
              date={date2} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="To"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 10,
                  tintColor: "#009387",
                },
                dateInput: {
                  margin: "18%",
                  borderRadius: 8,
                },
              }}
              onDateChange={(date2) => {
                setDate2(date2);
              }}
            />
          </View>
          <View style={styles.selectLeaveTypeRow}>
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                marginTop: 3,
                fontSize: 11,
              }}
            >
              {"Leaves   "} {"      Remaining"}
            </Text>
            <RadioGroup
              radioButtons={radioButtons1}
              onPress={onPressRadioButton1}
              layout="column"
            />
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity>
              <MaterialButtonDark
                style={styles.applyLeaveButton}
                title={"APPLY"}
              ></MaterialButtonDark>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.request}>Applied Leaves</Text>

        {appliedLeaves.map((prop, key) => {
          return (
            <View style={styles.appliedLeaveRow}>
              <View style={styles.label}>
                <Text>{prop.from}</Text>
              </View>
              <View style={styles.label}>
                <Text>{prop.to}</Text>
              </View>
              <View>
                <Text style={styles.leaveTypeButton}>{prop.leaveType}</Text>
              </View>
              <View>
                <Text style={styles.leaveTypeButton}>{prop.days}</Text>
              </View>
              <View>{renderStatus(prop.status, prop.id)}</View>
            </View>
          );
        })}
      </View>
      <ScrollView style={[styles.section, { margin: "0%" }]}>
        <View>
          <Text style={styles.request}>Pending Approvals</Text>

          {pendingApprovals.map((prop, key) => {
            return (
              <TouchableOpacity onLongPress={() => createThreeButtonAlert()}>
                <View style={styles.appliedLeaveRow}>
                  <View style={styles.label}>
                    <Text>{prop.employee_name}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text>{prop.from}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text>{prop.to}</Text>
                  </View>
                  <View>
                    <Text style={styles.leaveTypeButton}>{prop.leaveType}</Text>
                  </View>
                  <View>
                    <Text style={styles.leaveTypeButton}>{prop.days}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default LeaveScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
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
  selectHalfLeave: {
    height: 64,
    width: "97%",
    backgroundColor: "#009387",
    borderRadius: 10,
    marginLeft: 7,
  },
  selectLeaveTypeRow: {
    height: "95%",
    width: "40%",
    backgroundColor: "#009387",
    borderRadius: 10,
    alignItems: "flex-start",
    marginRight: 10,
    fontSize: 4,
  },
  leaveType: {
    width: 148,
    height: 52,
  },
  request: {
    color: "black",
    fontSize: 12,
    margin: 4,
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
    color: "red",
    fontSize: 30,
  },
  requestIconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 4,
  },
  leaveTypeButton1: {
    width: "10%",
    height: 55,
    borderRadius: 40,
    justifyContent: "space-evenly",
    backgroundColor: "#009387",
    padding: 14,
    marginBottom: 15,
  },
  datePickerStyle: {
    width: 250,
    marginTop: 10,
    marginBottom: 10,
  },
  applyLeaveButton: {
    width: "97%",
    justifyContent: "center",
    height: 60,
    marginLeft: 7,
    marginBottom: 5,
    backgroundColor: "black",
    borderRadius: 10,
  },
  label: {
    color: "red",
    borderWidth: 0.3,
    width: 100,
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 2,
  },
  leaveTypeButton: {
    backgroundColor: "black",
    height: 33,
    width: 33,
    color: "white",
    padding: 4,
    borderRadius: 20,
    textAlign: "center",
  },
  appliedLeaveRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
});

// <Svg viewBox="0 0 109.47 104.93" style={styles.ellipse}>
//           <Ellipse
//             stroke="rgba(230, 230, 230,1)"
//             strokeWidth={0}
//             fill="rgba(12,70,26,1)"
//             cx={5}
//             cy={5}
//             rx={55}
//             ry={5}
//           ></Ellipse>
//         </Svg>
