import * as React from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import MapView from 'react-native-maps';



function MapaDetalles  ()  {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%", justifyContent: 'center' }}>
      <MapView style={{
        flex: 1,
        width: 400, height: 100
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapaDetalles;
