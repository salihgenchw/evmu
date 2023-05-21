import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 44,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#f4511e",
        }}
      >
        evmu
      </Text>
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
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen("SifirBorc")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name="turkish-lira"
            size={24}
            style={{
              marginRight: 10,
            }}
          />
          <Text style={styles.drawerItemText}>Sıfır Borç</Text>
        </View>
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
