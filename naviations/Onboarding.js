import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import First from '../screen/onboarding/First'
import Second from '../screen/onboarding/Second'
import Third from '../screen/onboarding/Third'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="First" component={First} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={Second} options={{ headerShown: false }} />
        <Stack.Screen name="Third" component={Third} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default Onboarding

const styles = StyleSheet.create({})