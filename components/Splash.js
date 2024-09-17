import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ onFinish }) => {
  const fadeAdnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAdnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setTimeout(onFinish, 3000);
    });
  }, [fadeAdnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAdnim }]}>
        <Text style={styles.logoText}>Up Todo</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
});

export default Splash;
