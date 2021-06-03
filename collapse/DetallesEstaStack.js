import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetallesEstablecimientos from '../screens/DetallesEstablecimientos';

const Stack = createStackNavigator();

export default function DetallesEstaStack() {
 
  return (
    <Stack.Navigator>
      <Stack.Screen name="detallesestablecimientos" component={DetallesEstablecimientos} options={{title:"DetallesEstablecimientos"}} />
    </Stack.Navigator>
  );
}