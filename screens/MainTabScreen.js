import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

import LeaveScreen from "./LeaveSceen";
import GatePassScreen from "./GatePassScreen";
import AttendanceScreen from "./AttendanceScreen";
import ShiftScreen from "./ShiftScreen";
import SalaryScreen from "./SalaryScreen";
import ArrearsScreen from "./ArrearsScreen";
import ReimbursementScreen from "./ReimbursementScreen";
import AdvanceScreen from "./AdvanceScreen";
import TransportScreen from "./TransportScreen";
import SuggetionsScreen from "./SuggetionsScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = (props) => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    user={props.userInfo}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }, props) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Dashboard",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen name="Leave" component={LeaveScreen} />
    <HomeStack.Screen name="GatePass" component={GatePassScreen} />
    <HomeStack.Screen name="Attendance" component={AttendanceScreen} />
    <HomeStack.Screen name="Shift" component={ShiftScreen} />
    <HomeStack.Screen name="Salary" component={SalaryScreen} />
    <HomeStack.Screen name="Arrears" component={ArrearsScreen} />
    <HomeStack.Screen name="Reimbursement" component={ReimbursementScreen} />
    <HomeStack.Screen name="Advance" component={AdvanceScreen} />
    <HomeStack.Screen name="Transport" component={TransportScreen} />
    <HomeStack.Screen name="Suggetions" component={SuggetionsScreen} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="red"
            onPress={() => navigation.navigate("Details")}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
