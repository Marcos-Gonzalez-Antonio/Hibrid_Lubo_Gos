import React, { useState, useEffect } from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator, Text, Dimensions } from "react-native";
import * as SecureStore from 'expo-secure-store';
import MapView, {marker} from 'react-native-maps';
import { Image, Icon } from 'react-native-elements';
import Api from '../utils/Api';


const getItem = async () => {
  let token = await SecureStore.getItemAsync("userToken");
  return token;
}

export default function DetallesEstablecimientos(props) {
  const { route } = props
  const { idEstablecimiento } = route.params;
  const [organizacion, setOrganizacion] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("Mostrando establecimiento")
      let userToken = await getItem();
      console.log(userToken)
      let url = `establishment/obtain/${idEstablecimiento}`;
      let api = new Api(url, "GET", null, userToken);
      console.log(api)
      await api.send().then(res => {
        console.log(res.result)
        setOrganizacion(res.result)
      })
    })();
  }, [])


  const { nombre, Colonia, Ciudad, Estado, email, informacion } = setOrganizacion
  return (

    <View>
      {
        (!organizacion) ? (<ActivityIndicator size="large" />) : <Negocio organizacion={organizacion} />
      }
    </View>
  );
}

const Negocio = (props) => {
  const { organizacion } = props;
  const { nombre, Colonia, calle, telefono, Municipio, informacion, urlFoto, Latitud, Longitud, numeroExterior, Estado, CodPostal } = organizacion;
  let floatLatitud = parseFloat(Latitud);
  let floatLongitud = parseFloat(Longitud);
  console.log(floatLatitud);
  console.log(floatLongitud);
  return (
    <View style={{ backgroundColor: "#fff", height: "100%", justifyContent: 'center' }} >
      <Text style={{ fontSize: 20, color: 'black', fontWeight: "bold", textAlign: 'center' }}>{nombre}</Text>
      <Image
      
        source={{
          uri: urlFoto
        }}
        style={{ width: 360, height: 150, alignSelf: 'center' }}
      />

      <Text style={{ fontSize: 16, color: 'black', fontWeight: "bold", textAlign: 'justify', borderStartWidth: 10 }}>{informacion}</Text>
      <MapView style={{
        flex: 1,
        width: 400, height: 100
      }}
        initialRegion={{
          latitude: { floatLatitud },
          longitude: { floatLongitud },
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      />
      <Text   leftIcon={
            <Icon
              name='map-marker-radius'
              type='material-community'
              size={24}
              color='black'

            />
          }
      style={{ fontSize: 18, color: 'black', fontWeight: "bold"}}> Calle {calle} #{numeroExterior} Col. {Colonia} {Municipio},{Estado}. C.P. {CodPostal}</Text>
 
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{telefono}</Text>



    </View>
  )
}

const styles = StyleSheet.create({

});


