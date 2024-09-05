import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import First from "./screen/onboarding/First";
import Second from "./screen/onboarding/Second";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Third from "./screen/onboarding/Third";
import MainTabs from "././naviations/MainTabs";
import Onboarding from "./naviations/Onboarding";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import Reg from "./naviations/Reg";


// import Notifications from "./screen/onboarding/Notifications";

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();



// function DrawerNav() {
//   return(
//   <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Notifications" component={Notifications} />
//       </Drawer.Navigator>
//   )
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Reg" component={Reg} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
