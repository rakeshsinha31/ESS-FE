import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "react-native-datepicker";
import CalendarPicker from "react-native-calendar-picker";

import MaterialButtonDark from "../components/MaterialButtonDark";

function AttendanceScreen({ navigation }) {
  const [date1, setDate1] = useState("");
  const [date, setDate] = useState(new Date());

  const onDateChange = (date) => {
    setDate(date);
    // alert(date.toString());
  };

  const punchsForApproval = [
    {
      id: 1,
      name: "Sambha Singh",
      date: "28/02/2021",
      inTime: "8:41",
      outTime: "5:59",
    },
    {
      id: 2,
      name: "Shakaal Sahoo",
      date: "28/02/2021",
      inTime: "9:01",
      outTime: "6:18",
    },
    {
      id: 3,
      name: "Gabbar Gaud",
      date: "28/02/2021",
      inTime: "8:51",
      outTime: "6:42",
    },
    {
      id: 1,
      name: "Sambha",
      date: "28/02/2021",
      inTime: "8:41",
      outTime: "5:59",
    },
    {
      id: 2,
      name: "Shakaal",
      date: "28/02/2021",
      inTime: "9:01",
      outTime: "6:18",
    },
    {
      id: 3,
      name: "Gabbar",
      date: "28/02/2021",
      inTime: "8:51",
      outTime: "6:42",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.request}>Apply Forgot Punch</Text>
        <View style={styles.requestRow}>
          <TextInput
            placeholder="In"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Out"
            placeholderTextColor="#666666"
            style={styles.textInput}
          />
          <View>
            <DatePicker
              style={styles.datePickerStyle}
              date={date1}
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
              onDateChange={(date1) => {
                setDate1(date1);
              }}
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
                <View style={styles.label}>
                  <Text>{prop.name}</Text>
                </View>
                <View style={styles.label}>
                  <Text>{prop.date}</Text>
                </View>
                <View>
                  <Text style={styles.inTime}>{prop.leaveType}</Text>
                </View>
                <View>
                  <Text style={styles.outTime}>{prop.days}</Text>
                </View>
                <View>
                  <TouchableOpacity onLongPress={() => alert(prop.id)}>
                    <Icon
                      name="check-circle-outline"
                      style={[styles.icon, { color: "green" }]}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onLongPress={() => alert(prop.id)}>
                    <Icon
                      name="delete-circle-outline"
                      style={[styles.icon, { color: "red" }]}
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
    width: 104,
    height: 40,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    paddingLeft: 38,
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
    color: "red",
    borderWidth: 0.3,
    width: 150,
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
