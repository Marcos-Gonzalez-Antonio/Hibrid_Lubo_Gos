import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import RecuperarContrasena from '../screens/RecuperarContrasena';

const Stack = createStackNavigator()
export default function Inicios(props) {
  //console.log(signIn)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecuperarContrasena" component={RecuperarContrasena} />
    </Stack.Navigator>
    
  )
}

