import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screen/HomeScreen";
import SettingsScreen from "../screen/SettingsScreen";
import DrawerContent from "../components/DrawerContent";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const AppNavigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
