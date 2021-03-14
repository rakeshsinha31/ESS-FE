import React, { useRef, useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "react-native-datepicker";
import CalendarPicker from "react-native-calendar-picker";

import MaterialButtonDark from "../components/MaterialButtonDark";
import * as Animatable from "react-native-animatable";

function AttendanceScreen({ navigation }) {
  let VALID = true;

  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({
    inTime: "",
    outTime: "",
    shift: "",
    date: new Date(),
    isValidInTime: true,
    isValidOutTime: true,
    isValidShift: true,
    isValidDate: true,
  });
  // const [date, setDate] = useState(new Date());

  const onDateChange = (date) => {
    setDate(date);
    // alert(date.toString());
  };

  const validateInTime = (val) => {
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(val);
    if (isValid) {
      setData({
        ...data,
        inTime: val,
        isValidInTime: true,
      });
    } else {
      setData({
        ...data,
        inTime: val,
        isValidInTime: false,
      });
    }
  };

  const validateOutTime = (val) => {
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(val);
    if (isValid) {
      setData({
        ...data,
        outTime: val,
        isValidOutTime: true,
      });
    } else {
      setData({
        ...data,
        outTime: val,
        isValidOutTime: false,
      });
    }
  };

  const handleApply = () => {
    console.log(VALID);
    alert(VALID);
    if (!VALID) {
      alert("Please correct the errors and apply again");
      return false;
    } else if (
      data.inTime.trim().length == 0 ||
      data.outTime.trim().length == 0
    ) {
      VALID = false;
      alert("Please enter a valid In Or Out time");
      return false;
    } else {
      alert(1);
    }
  };

  const createThreeButtonAlert = (id) =>
    Alert.alert(
      "Take Action",
      "",
      [
        {
          text: "Approve",
          buttons: "confirm",
          onPress: () => console.log("Approve Pressed", id),
        },
        {
          text: "Reject",
          onPress: () => console.log("Reject Pressed", id),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );

  const punchsForApproval = [
    {
      id: 1,
      name: "Sambha Singh",
      date: "28/02/21",
      inTime: "8:41",
      outTime: "15:59",
      shift: "B",
    },
    {
      id: 2,
      name: "Shakaal Sahoo",
      date: "28/02/21",
      inTime: "9:01",
      outTime: "16:18",
      shift: "A",
    },
    {
      id: 3,
      name: "Gabbar Gaud",
      date: "28/02/21",
      inTime: "8:51",
      outTime: "16:42",
      shift: "B",
    },
    {
      id: 1,
      name: "Sambha",
      date: "28/02/21",
      inTime: "8:41",
      outTime: "15:59",
      shift: "C",
    },
    {
      id: 2,
      name: "Shakaal",
      date: "28/02/21",
      inTime: "9:01",
      outTime: "16:18",
      shift: "B",
    },
    {
      id: 3,
      name: "Gabbar",
      date: "28/02/21",
      inTime: "8:51",
      outTime: "16:42",
      shift: "G",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.request}>Apply Forgot Punch</Text>
        <View style={styles.requestRow}>
          <TextInput
            placeholder="In(8:30)"
            placeholderTextColor="#a8a8a8"
            style={styles.textInput}
            onChangeText={(val) => validateInTime(val)}
          />
          <TextInput
            placeholder="Out(16:32)"
            placeholderTextColor="#a8a8a8"
            style={styles.textInput}
            onChangeText={(val) => validateOutTime(val)}
          />
          <TextInput
            placeholder="Shift"
            placeholderTextColor="#a8a8a8"
            style={styles.textInput}
          />
          <View>
            <DatePicker
              style={styles.datePickerStyle}
              date={date}
              mode="date"
              placeholder="Select date"
              placeholderTextColor="#666666"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 40,
                  size: 10,
                },
                dateInput: {
                  margin: "18%",
                  borderRadius: 10,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleApply()}>
            <MaterialButtonDark
              style={styles.applyLeaveButton}
              title={"APPLY"}
            ></MaterialButtonDark>
          </TouchableOpacity>
        </View>
        <View style={([styles.requestRow], { margin: 2 })}>
          {data.isValidInTime
            ? null
            : ((VALID = false),
              (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>In Time is not valid</Text>
                </Animatable.View>
              ))}

          {data.isValidOutTime
            ? null
            : ((VALID = false),
              (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>Out Time is not valid</Text>
                </Animatable.View>
              ))}
        </View>
      </View>

      <ScrollView style={[styles.section, { margin: "1%" }]}>
        <Text style={styles.request}>Pending Approvals</Text>
        <View style={{ marginBottom: "1%", marginTop: "1%" }}>
          {punchsForApproval.map((prop, key) => {
            return (
              <View
                style={[
                  styles.appliedLeaveRow,
                  { justifyContent: "space-around" },
                ]}
              >
                <View
                  style={
                    ([styles.label],
                    { width: "32%", borderWidth: 0.3, borderRadius: 5 })
                  }
                >
                  <Text>{prop.name}</Text>
                </View>
                <View
                  style={
                    ([styles.label],
                    { width: "18%", borderWidth: 0.3, borderRadius: 5 })
                  }
                >
                  <Text>{prop.date}</Text>
                </View>
                <View style={styles.label}>
                  <Text>{prop.inTime}</Text>
                </View>
                <View style={styles.label}>
                  <Text>{prop.outTime}</Text>
                </View>
                <View style={styles.label}>
                  <Text>{prop.shift}</Text>
                </View>
                <View>
                  <Text style={styles.inTime}>{prop.leaveType}</Text>
                </View>
                <View>
                  <Text style={styles.outTime}>{prop.days}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onLongPress={() => createThreeButtonAlert(prop.id)}
                  >
                    <Icon
                      name="account-circle"
                      style={[styles.icon, { color: "black" }]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <ScrollView style={[styles.section, { margin: "1%" }]}>
        <View>
          <Text style={styles.request}>My Attendance</Text>
          <View style={[styles.requestRow, { margin: 0.5 }]}>
            <Text
              style={[styles.request, { fontSize: 10, fontWeight: "normal" }]}
            >
              Avg. In Time
            </Text>
            <Text
              style={[styles.request, { fontSize: 10, fontWeight: "normal" }]}
            >
              Avg. Out Time
            </Text>
            <Text
              style={[styles.request, { fontSize: 10, fontWeight: "normal" }]}
            >
              Avg. Hours/Day
            </Text>
          </View>

          <View style={[styles.requestRow, { margin: 1 }]}>
            <View>
              <Text style={styles.AvgTime}>{"8:30"}</Text>
            </View>
            <View>
              <Text style={styles.AvgTime}>{"8:30"}</Text>
            </View>
            <View>
              <Text style={styles.AvgTime}>{"8:30"}</Text>
            </View>
          </View>
          <View>
            <CalendarPicker
              onDateChange={onDateChange}
              value={date}
              //onPressDay={handleOnPressDay.bind(date)}
            />
          </View>
        </View>
      </ScrollView>
      <ScrollView style={[styles.section, { margin: "1%" }]}>
        <View>
          <View style={[styles.requestRow]}>
            <View>
              <Text style={styles.AvgTime}>{"8:30"}</Text>
            </View>
            <View>
              <Text style={styles.AvgTime}>{"8:30"}</Text>
            </View>
            <View>
              <Text style={styles.AvgTime}>{"8:30"}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AttendanceScreen;

const styles = StyleSheet.create({
  customDatesStyles: {
    backgroundColor: "blue",
  },
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
  textInput: {
    borderWidth: 0.3,
    width: 75,
    height: 40,
    borderRadius: 6,
    marginRight: 30,
    marginLeft: 43,
    paddingLeft: 10,
    fontSize: 10,
  },
  request: {
    color: "black",
    fontSize: 12,
    margin: 4,
    fontWeight: "bold",
    marginLeft: 10,
  },
  requestRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 7,
  },
  AvgTime: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 0.25,
    borderRadius: 3,
    justifyContent: "center",
  },
  icon: {
    color: "red",
    fontSize: 30,
  },
  datePickerStyle: {
    width: 225,
    marginLeft: 12,
  },
  applyLeaveButton: {
    width: "97%",
    justifyContent: "center",
    height: 60,
    marginLeft: 7,
    marginBottom: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  AvgTime: {
    backgroundColor: "black",
    height: 30,
    width: 42,
    color: "white",
    padding: 7,
    borderRadius: 25,
    textAlign: "center",
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
    borderWidth: 0.3,
    width: "10%",
    alignItems: "center",
    borderRadius: 5,
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
  errorMsg: {
    color: "#FF0000",
    fontSize: 10,
  },
});
