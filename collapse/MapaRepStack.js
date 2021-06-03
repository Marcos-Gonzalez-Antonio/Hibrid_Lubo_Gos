import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native'
import MapaRepartidor from '../screens/MapaRepartidor';
import HeaderX from '../components/HeaderX'
const Stack = createStackNavigator();

export default function MapaRepStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="maparepartidor" component={MapaRepartidor} options={
         { 
           headerTitle: props => <HeaderX button="Settings" style={styles.headerX}/>
         }
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