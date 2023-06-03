import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const ProductDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          width: Dimensions.get("window").width,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Ionicons
              name="chevron-back"
              size={Dimensions.get("window").width / 10}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "gray",
              marginLeft: Dimensions.get("window").width / 6.5,
            }}
          >
            {item.title}
          </Text>
        </View>
      </View>

      <View
        style={{
          //   flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          width: Dimensions.get("window").width,
        }}
      >
        <Image
          source={{ uri: item.imageUri }}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height / 3,
          }}
          resizeMode="contain"
        />
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "darkgray",
          width: Dimensions.get("window").width,
          paddingHorizontal: 10,
          paddingBottom: 10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}
        >
          <FontAwesome
            name="turkish-lira"
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "gray" }}>
            {item.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: Dimensions.get("window").width / 2.5,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "gray" }}>
            {item.donepercent}%
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "gray" }}>
            {" "}
            indirim
          </Text>
        </View>
      </View> */}
    </>
  );
};

export default ProductDetailScreen;
