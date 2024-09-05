import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
// const navigation = useNavigation();

const Registration = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegistration = async () => {
    try{
      //Get exsiting users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      // Check if the username or email already exists
      const userExists = users.some(user => user.username === username || user.email === email);

      if(userExists) {
        Alert.alert('Username or email already exists');
      } else {
        //Add new user
        const newuser = { username, email, password };
        users.push(newuser);
        await AsyncStorage.setItem('users', JSON.stringify(users));

        Alert.alert("Registration Successful!");
        navigation.replace('Login'); //Navigate to SignIn screen after successful
      }

  } catch (error) {
    console.error('Error during registration: ', error);
    Alert.alert('An error occured during registration');
  }
};
  return (
    

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Email"
        keyboardType='email-address'
        //   autoCapitalize='false'
        //   autoCorrect='false'
          value={email}
          onChangeText={setEmail}
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
      <Button title="Register" onPress={handleRegistration} />

      <Text>
        Already have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          
          <Text>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Registration

const styles = StyleSheet.create({})