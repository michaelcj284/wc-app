import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Third = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "20%" }}>
        <Text style={{ color: "white", paddingHorizontal: "10%" }}>
          Change the Outlook of your Car through Us.
        </Text>
        <Image
          source={require("../../assets/26234277_7145849.png")}
        />
      </View>

      <Text style={styles.text}>
        Welcome to Members Only Car wash where your vehicle receive attention it
        deserves & where every service is an experience
      </Text>

      <View style={styles.circle}>
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <TouchableOpacity style={styles.but} onPress={() => navigation.navigate("Mike")}>
        <Text style={{ textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Third;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#151B29",
    height: "100%",
  },

  text: {
    color: "white",
    marginTop: "5%",
    paddingHorizontal: "10%",
  },

  circle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginTop: 50,
  },

  but: {
    backgroundColor: "gold",
    marginTop: "15%",
    padding: "3%",
    marginHorizontal: "10%",
  },

  // img: {
  //   width: "60%",
  // }
});
