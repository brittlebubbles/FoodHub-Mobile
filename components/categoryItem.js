import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const CategoryItem = ({ navigation, item }) => {
  return (
    <View>
      <View>
        <Image source={{ uri: item.url }} style={styles.categoryItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesText: {
    padding: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryItem: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default CategoryItem;
