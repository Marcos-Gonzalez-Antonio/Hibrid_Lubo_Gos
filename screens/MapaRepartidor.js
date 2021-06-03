import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HeaderX from "../components/HeaderX";
import { Image, ListItem, Avatar } from 'react-native-elements';
function MapaRepartidor(props) {
  const list = [
    {
      name: 'Repartidor 1',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Santa Catarina #320, Huauchinango, Puebla'
    },
    {
      name: 'Repartidor 2',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Colonia el paraiso #150, Huauchinango, Puebla'
    },
     {
      name: 'Repartidor ',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Corregidora #45, colonia centro, Huauchinango, Puebla'
    },
    
    ]
  return (
    <View style={styles.root}>
      <Image
  source={require('../assets/images/mapita.jpg') }
  style={{ width: 360, height: 200 }}
/>
<View>
            {
              list.map((l, i) => (
                <ListItem key={i}>
                  <Avatar source={{uri: l.avatar_url}} rounded/>
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
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

export default MapaRepartidor;
