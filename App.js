import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUsScreen from './screens/ContactUsScreen';
import SuccessScreen from './screens/SuccessScreen';
import ErrorScreen from './screens/ErrorScreen'; 


const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen name="Contact Us" component={ContactUsScreen} />
    <Stack.Screen name="Success" component={SuccessScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="Error" component={ErrorScreen} options={{ headerLeft: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
