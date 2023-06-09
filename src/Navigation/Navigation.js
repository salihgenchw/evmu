import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import HomeScreen from "../screen/HomeScreen";
import SettingsScreen from "../screen/SettingsScreen";
import SifirBorc from "../screen/SifirBorc";
import ProductDetailScreen from "../screen/ProductDetailScreen";

import DrawerContent from "../components/DrawerContent";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
        tabBarActiveTintColor: "#f4511e",
        tabBarInactiveTintColor: "gray",
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" size={24} color={color} />
        ),
        tabBarActiveTintColor: "#f4511e",
        tabBarInactiveTintColor: "gray",
      }}
    />

    <Tab.Screen
      name="SifirBorc"
      component={SifirBorc}
      options={{
        tabBarLabel: "Sıfır Borç",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome
            name="turkish-lira"
            size={Dimensions.get("window").width / 15}
            color={color}
          />
        ),
        tabBarActiveTintColor: "#f4511e",
        tabBarInactiveTintColor: "gray",
      }}
    />
  </Tab.Navigator>
);

const AppNavigation = () => (
  <>
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          screenOptions={{ headerShown: false }}
        />
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  </>
);

export default AppNavigation;
