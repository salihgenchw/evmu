import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const ZeroItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchView}
        onPress={() => {
          navigation.navigate("ProductDetail", { item: item });
        }}
      >
        <Image
          source={{ uri: item.imageUri }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.percentView}>
          <Text style={styles.percentText}>%{item.donepercent}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ZeroItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  touchView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: Dimensions.get("window").width / 3.5,
  },

  image: {
    width: Dimensions.get("window").width / 4.1,
    height: Dimensions.get("window").width / 4.1,
  },

  title: {
    fontSize: Dimensions.get("window").width / 28,
    fontWeight: "bold",
    color: "gray",
    marginLeft: 10,
    flex: 1,
  },

  percentView: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: Dimensions.get("window").width / 40,
  },

  percentText: {
    fontSize: Dimensions.get("window").width / 7,
    fontWeight: "bold",
    color: "#272829",
  },
});
