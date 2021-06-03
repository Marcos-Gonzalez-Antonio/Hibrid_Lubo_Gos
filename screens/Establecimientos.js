import React, { useState,  useEffect } from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator} from "react-native";
import * as SecureStore from 'expo-secure-store';

import FlatlistEstablecimiento from '../components/FLatListEstablecimientos';
import Api from '../utils/Api';

const getItem = async () => {
  let token = await SecureStore.getItemAsync("userToken");
  return token;
}
function Establecimientos(props) {
  const [establecimientoh, setEstablecimientoh] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("Mostrando establecimiento")
      let userToken = await getItem();
      console.log(userToken)
      let url = `establishment/list`;
      let api = new Api(url, "GET", null, userToken);
      console.log(api)
      await api.send().then(res => {
        console.log(res.result)
        setEstablecimientoh(res.result)
      })
    })();
  }, [])
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
     
      {(!establecimientoh) ? <ActivityIndicator size="large" /> : <FlatlistEstablecimiento establecimientoh={establecimientoh} />}
    </View>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    marginTop: 10
  },
  
  headerX2: {
    top: 0,
    left: 0,
    height: 80,
    position: "absolute",
    right: 0,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  headerXStack: {
    height: 80
  }
});

export default Establecimientos;
