import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "../components/Splash";

const Tab = createBottomTabNavigator();


const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSplash, setShowSplash] = useState(true);

  const navigation = useNavigation();

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  const handleLogin = async () => {
    try {
      //Get exsiting users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      //Check if the user exists and the password matches
      const user = users.find(
        (user) =>
        (user.username === usernameOrEmail || 
          user.email === usernameOrEmail) &&
          user.password === password
      );

      if (user) {
        Alert.alert("Sign in successful!");
        navigation.replace("Todo"); //Navigate to MainTabs after successfu login
      } else {
        Alert.alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      Alert.alert("An error occured during sign in");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In</Text>
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Username or Email"
        //   autoCapitalize='false'
        //   autoCorrect='false'
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
      />

      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Password"
        //   autoCapitalize='false'
        //   autoCorrect='false'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleLogin}/>

      <Text>
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          
          <Text>signUp</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
