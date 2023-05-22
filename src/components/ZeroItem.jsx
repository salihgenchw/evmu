import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ZeroItem = ({ item }) => {
  return (
    <View
      style={{
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
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image
          source={{ uri: item.imageUri }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "gray",
            marginLeft: 10,
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ZeroItem;

const styles = StyleSheet.create({});
