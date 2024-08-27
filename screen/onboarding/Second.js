import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Second = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "20%" }}>
        <Text style={{ color: "white", paddingHorizontal: "10%" }}>
          Get Your Car clean at your own Convenience.
        </Text>
        <Image
          source={require("../../assets/27398790_97y_c5qn8rqvdlim6q31dpkm6b9g6k.png")}
        />
      </View>

      <Text style={styles.text}>
        Welcome to Members Only Car wash where your vehicle receive attention it
        deserves & where every service is an experience
      </Text>

      <View style={styles.circle}>
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("Third")}
      >
        <Text style={{ textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#151B29",
    height: "100%",
  },

  text: {
    color: "white",
    marginTop: "20%",
    paddingHorizontal: "10%",
  },

  circle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginTop: 70,
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
