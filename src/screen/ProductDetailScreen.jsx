import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const ProductDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  // useEffect(() => {
  //   console.log("locale", new Date().toLocaleDateString());
  // }, []);

  detailsData = [
    {
      id: 1,
      payDate: "Mayıs '23",
      payPrice: "1000",
      payDesc: "Ödeme 1",
    },
    {
      id: 2,
      payDate: "Haziran '23",
      payPrice: "1500",
      payDesc: "Ödeme 2",
    },
  ];

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

      <FlatList
        data={detailsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              width: Dimensions.get("window").width,
              padding: 10,
              justifyContent: "space-between",
              shadowColor: "gray",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 10,
              // margin: 5,
              marginVertical: 5,

              elevation: 1,
            }}
          >
            <Text style={{ fontSize: 24, color: "gray" }}>{item.payDate}</Text>
            <Text style={{ fontSize: 24, color: "gray" }}>
              {item.payPrice} ₺
            </Text>
          </View>
        )}
      />
    </>
  );
};

export default ProductDetailScreen;
