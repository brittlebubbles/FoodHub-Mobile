import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import CategoryItem from "./categoryItem";

const { width, heigth } = Dimensions.get("window");

const Category = ({ navigation, data }) => {
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
  });

  return (
    <ScrollView>
      <FlatList
        data={data}
        horizontal={true}
        // ref={(flatList) => {
        //   this.flatList = flatList;
        // }}
        keyExtractor={(item, index) => "key" + index}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <CategoryItem item={item} />;
        }}
      />
    </ScrollView>
  );
};

export default Category;
