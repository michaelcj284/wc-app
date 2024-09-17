import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from '../screen/TodoScreen';
import AddTodoScreen from '../screen/AddTodoScreen';
import { FontAwesome } from "@expo/vector-icons"; // For tab icons

const Tab = createBottomTabNavigator();

export default function TodoNav() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Add Todo') {
              iconName = 'home';
            } else if (route.name === 'Todo List') {
              iconName = 'cog';
            }

            // You can return any icon component here
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Add Todo" component={AddTodoScreen} />
        <Tab.Screen name="Todo List" component={TodoScreen} />
      </Tab.Navigator>
  );
}
