import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

function MainTabs() {
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
            tabBarLabel: ({ focused }) => {
              if (focused) {
                let labelColor = focused ? "#6a0dad" : "#1e90ff";
                return (
                  <Text style={{ color: labelColor, fontSize: 12, marginBottom: 10}}>
                    {route.name}
                  </Text>
                );
              } else { 
                return null; //Hide label when not focused
              }
            }
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
      
    );
  }

  export default MainTabs;