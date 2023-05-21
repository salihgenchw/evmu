import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

const SifirBorc = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Macbook Air M2",
      price: 26300,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Apple iPhone 11",
      price: 17200,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990059",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Apple Watch SE",
      price: 6700,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",

            color: "gray",
          }}
        >
          Kalan Borç
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 54,
            fontWeight: "bold",
            color: "#f4511e",
          }}
        >
          65.413 ₺
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
              margin: 10,
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
        )}
      />
    </View>
  );
};

export default SifirBorc;
