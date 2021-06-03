import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderX from '../components/HeaderX'
import Establecimientos from '../screens/Establecimientos';
import DetallesEstablecimientos from '../screens/DetallesEstablecimientos';
import {StyleSheet} from 'react-native'

const Stack = createStackNavigator();

export default function EstabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="establecimientos" component={Establecimientos} options={
         { 
           headerTitle: props => <HeaderX button="Settings" style={styles.headerX}/>
         }
      } />
      <Stack.Screen name="DetallesEstablecimientos" component={DetallesEstablecimientos} options={{title:" Detalles Establecimiento"}
       
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