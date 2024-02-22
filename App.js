// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUsScreen from './screens/ContactUsScreen';
import SuccessScreen from './screens/SuccessScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        
        <Stack.Screen name="Contact Us" component={ContactUsScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
