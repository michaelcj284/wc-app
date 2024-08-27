import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import GetstartedButton from "../../components/GetstartedButton";
import Icon from "react-native-vector-icons/FontAwesome";

const First = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "40%", paddingHorizontal: "10%" }}>
        <Image source={require("../../assets/Group 1381.png")} />
        <Text style={{ color: "white" }}>
          The App that cleans your car.
        </Text>
      </View>

      <Text style={styles.text}>
        Welcome to Members Only Car wash where your vehicle receive attention it
        deserves & where every service is an experience
      </Text>

      <View style={styles.circle}>
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('Second')}>
        <Text style={{textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#151B29",
    height: "100%",
    
  },

  text: {
    color: "white",
    marginTop: "40%",
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
  }
});
