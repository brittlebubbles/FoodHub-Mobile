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
import {
  Entypo,
  Ionicons,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Category from "../components/Category";

import { dummyData, recipes } from "../data/Data";
import { FlatList, ScrollView } from "react-native-gesture-handler";

// const { width, height } = Dimensions.get|

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      <View style={styles.rowMenu}>
        <Text style={styles.welcomeText}>Hi Adom</Text>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/passport.png")}
            />
          </View>
        </View>
      </View>

      <View>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("RecipeDetails")}
          style={{ backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo</Text>
        </TouchableOpacity> */}
        <Carousel data={recipes} />
      </View>
      <View>
        <Text style={styles.categoriesText}>Categories</Text>
        {/* <ScrollView>
          <FlatList
            data={recipes}
            horizontal={true}
            ref={(flatList) => {
              this.flatList = flatList;
            }}
            keyExtractor={(item, index) => "key" + index}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View>
                  <View>
                    <Image
                      source={{ uri: item.url }}
                      style={styles.categoryItem}
                    />
                  </View>
                </View>
              );
            }}
          />
        </ScrollView> */}
        <Category data={recipes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: -10,
  },
  //   container: {
  //     flex: 1,
  //   },
  backgroundImage: {
    width: "100%",
    height: 300,
  },

  rowMenu: {
    flexDirection: "row",
    paddingTop: 50,
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  avatarContainer: {
    height: 55,
    width: 55,
    borderRadius: 50,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4285F4",
  },
  welcomeText: {
    // padding: 14,
    fontSize: 24,
    fontWeight: "bold",
  },
  avatar: {
    height: "95%",
    width: "95%",
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    height: "100%",
    width: "100%",
  },
  // heroText: {
  //   fontSize: 35,
  //   fontWeight: "700",
  //   color: "white",
  //   marginLeft: 25,
  //   marginTop: 2,
  // },
  categoriesText: {
    padding: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryItem: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
