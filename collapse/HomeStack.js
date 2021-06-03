import * as React from 'react';
import {StyleSheet} from 'react-native'
import { createStackNavigator} from '@react-navigation/stack';

import HomeLubo from "../screens/HomeLubo";
import MapaDetalles from '../screens/MapaDetalles';
import HeaderX from '../components/HeaderX'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeLubo" component={HomeLubo} options={
         { 
           headerTitle: props => <HeaderX button="Settings" style={styles.headerX}/>
         }
      }
      />
      <Stack.Screen name="MapaDetalles" component={MapaDetalles} options={{title:" Mapa Detalles"}
        
      } />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
headerX: {
  height: 80,
  elevation: 15,
  shadowOffset: {
    height: 7,
    width: 1
  },
  shadowColor: "rgba(0,0,0,1)",
  shadowOpacity: 0.1,
  shadowRadius: 5,
  width: 360,
  alignSelf: "center"
}
});