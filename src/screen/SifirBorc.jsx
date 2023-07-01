import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import ZeroItem from "../components/ZeroItem";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { set } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { Keyboard } from "react-native";

const SifirBorc = ({ navigation }) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["1%", "50%", "75%"], []);

  const handleSheetChanges = useCallback((index) => {
    if (index >= 1) {
      setOpenBottomSheet(true);
    } else {
      setOpenBottomSheet(false);
    }
  }, []);

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Macbook Air M2",
      price: 26300,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
      donepercent: 96,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Apple iPhone 11",
      price: 17200,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990059",
      donepercent: 96,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Apple Watch SE",
      price: 6700,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713",
      donepercent: 96,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e2922222",
      title: "Honda PCX 2023",
      price: 12700,
      imageUri:
        "https://st3.myideasoft.com/idea/bm/61/myassets/blogs/honda-pcx-2022.jpg?revision=1643289226",
      donepercent: 11,
    },

    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa922263",
      title: "Apple iPhone 11",
      price: 17200,
      imageUri:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990059",
      donepercent: 96,
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
            fontSize: 60,
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
          <ZeroItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => !openBottomSheet && setOpenBottomSheet(true)}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#f4511e",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          +
        </Text>
      </TouchableOpacity>
      {openBottomSheet && (
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            zIndex: 1,
          }}
        >
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <TextInput style={styles.textInput} placeholder="Borç Adı" />
              <TextInput
                style={styles.textInput}
                placeholder="Borç Tutarı"
                keyboardType="numeric"
              />
              <TextInput style={styles.textInput} placeholder="Görsel Url" />
              <TouchableOpacity
                onPress={() => {
                  setOpenBottomSheet(false);
                  bottomSheetRef.current?.close();
                }}
                style={{
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: "#f4511e",
                  marginTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  width: Dimensions.get("window").width / 1.1,
                }}
              >
                <Text
                  style={{
                    fontSize: Dimensions.get("window").width / 20,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Ekle
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    height: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default SifirBorc;
