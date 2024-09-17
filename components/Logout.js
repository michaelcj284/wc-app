import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Logout = () => {

      // Handle logout
    const handleLogout = async () => {
        await AsyncStorage.removeItem('userSession'); // Assuming 'userSession' stores user session data
        navigation.navigate('Reg'); // Redirect to registration/login screen after logout
      };

  return (
    <View>
        {/* Logout button */}
      <Button title="Logout" onPress={handleLogout} color="red" />    
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})