import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Registration from '../auth/Registration'
import Login from '../auth/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Reg = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Reg

const styles = StyleSheet.create({})