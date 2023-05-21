import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("Home")}
      >
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("Settings")}
      >
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  drawerItem: {
    marginBottom: 20,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DrawerContent;
