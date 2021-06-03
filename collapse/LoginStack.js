import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../src/screens/Login';
import RecuperarContrasena from '../src/screens/RecuperarContrasena';


const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title:"Login"}} />
      <Stack.Screen name="RecuperarContrasena" component={RecuperarContrasena} options={{title:"RecuperarContrasena"}} />
    </Stack.Navigator>
  );
}