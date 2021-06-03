import React from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
const FlatlistDemo = (props) => {
  const navigation = useNavigation();
  const {ordenes} = props
  
  return (
    <View>
      <FlatList
        data = {ordenes}
        renderItem = { (orden) => <Item orden = {orden} navigation = {navigation}/> }
        keyExtractor = {(item,index) => index.toString() }
        //ItemSeparatorComponent={this.renderSeparator}
      />
    </View>
  )
}
renderSeparator = () => {
  return(
    <View
    style={{height:1, width:'100%',backgroundColor:'black'}}>

    </View>
  )
}
const Item = (props) => {
  const {orden,navigation} = props;
  const {NombreRepartidor,FechaPeticion,NombreRecibe,idOrden,StatusOrden} = orden.item;
  
  return (
    <TouchableOpacity style={{flex:1, flexDirection:'row', marginBottom:3}}
    onPress={() => navigation.navigate("MapaDetalles")}>
    <View style={{flex:1, justifyContent:'center', margin:5}}>
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{NombreRepartidor}</Text>
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{NombreRecibe}</Text>
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{FechaPeticion}</Text>
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{idOrden}</Text>
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{StatusOrden}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FlatlistDemo
