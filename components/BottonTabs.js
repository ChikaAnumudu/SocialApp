import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import Notification from "../screens/Notification";

export default function BottonTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        screenStyle: { backgroundColor: "white" },
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require("../assets/Images/home-selected.png")} />
            ) : (
              <Image source={require("../assets/Images/home-unselected.png")} />
            ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/Images/categories-selected.png")}
                style={{ marginRight: 40 }}
              />
            ) : (
              <Image
                source={require("../assets/Images/categories-unselected.png")}
                style={{ marginRight: 40 }}
              />
            ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/Images/notifications-selected.png")}
                style={{ marginLeft: 40 }}
              />
            ) : (
              <Image
                source={require("../assets/Images/notifications-unselected.png")}
                style={{ marginLeft: 40 }}
              />
            ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/Images/Profile-selected.png")}
              />
            ) : (
              <Image
                source={require("../assets/Images/profile-unselected.png")}
              />
            ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
