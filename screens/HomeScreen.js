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
import { dummyData } from "../data/Data";

// const { width, height } = Dimensions.get|

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      <View style={styles.rowMenu}>
        <Entypo name="list" size={45} color="black" />
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
        <Carousel data={dummyData} />
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
  heroText: {
    fontSize: 35,
    fontWeight: "700",
    color: "white",
    marginLeft: 25,
    marginTop: 2,
  },
});
