import { StyleSheet, View, Text, ActivityIndicator, Alert, Button} from "react-native";
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from "react-native-picker-select";
import React, { useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';

import FlatListDemo from '../components/FlatlistDemo'
import Api from '../utils/Api';

const getItem = async () => {
  let token = await SecureStore.getItemAsync("userToken");
  return token;
}

function HomeLubo({ navigation }) {
 
  const [ordenes, setOrdenes] = useState(null);

  async function buscarOrdenes() {

    console.log("Buscando")
    let userToken = await getItem();
    console.log(userToken)
    let url = `order/reporteOrdenes/${comienzo}/${fin}/${status}`;
    console.log(url)
    let api = new Api(url, "GET", null, userToken);
    console.log(api)
    await api.send().then(res => {
      let data = res.result.data
      console.log(data)
      setOrdenes(data);
      

    })
  }
  const [comienzo, setComienzo] = useState(null)
  const [fin, setFin] = useState(null)
  const [status, setStatus] = useState(null);
 
  if (comienzo == '' || fin == '') {
    Alert.alert('ingrese fechas validas', [
      { text: 'Aceptar' }
    ]);
    return false;
  }

  console.log(comienzo, fin,status)
  return (

    <View style={styles.contenedor} >
      <View style={styles.barraBusqueda} >
        <DatePicker
          mode="date"
          date={comienzo}
          onDateChange={(date) => setComienzo(date)}

        />
        <DatePicker
          mode="date"
          date={fin}
          onDateChange={(date) => setFin(date)}
        />
        <Icon
          containerStyle={styles.buscador}
          onPress={() => buscarOrdenes()}
          name='magnify'
          type='material-community'
          size={35}
          backgroundColor='pink'
          color='purple'
        />

      </View>
      <Text>
        {status ?
          `mostrando ordenes ${status}` :
          "Por favor seleccione el estatus de las ordenes"
        }
      </Text>
      <RNPickerSelect
        onValueChange={(value) => setStatus(value)}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Seleccione el estado de las ordenes", value: null }}
        items={[
          { label: "Activa", value: "1" },
          { label: "Finalizada", value: "0" },
          { label: "Cancelada", value: "400" },

        ]}
      />
       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      {(!ordenes) ? <ActivityIndicator size="large" /> : <FlatListDemo ordenes={ordenes} />}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    color: "#fff"
  },
  barraBusqueda: {
    flexDirection: "row",
    marginTop: 20
  },
  buscador: {
    margin: 5,
    marginLeft: 20
  }
});

export default HomeLubo;
