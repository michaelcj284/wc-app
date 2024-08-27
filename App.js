import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import First from "./screen/onboarding/First";
import Second from "./screen/onboarding/Second";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Third from "./screen/onboarding/Third";
import Home from "./screen/Home";
import Setting from "./screen/Setting";
import Icon from "react-native-vector-icons/FontAwesome";
import Notifications from "./screen/onboarding/Notifications";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Mike() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconColor = focused ? 'violet' : 'blue';

            if (route.name === "Home"){
              iconName = 'home';
            }else if (route.name === "Setting"){
              iconName = 'cog';
            }

            return <Icon name={iconName} size={size} color={iconColor} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    
  );
}

function DrawerNav() {
  return(
  <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={Second} options={{ headerShown: false }} />
        <Stack.Screen name="Third" component={Third} options={{ headerShown: false }} />
        <Stack.Screen name="Mike" component={Mike} options={{ headerShown: false }} />
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
