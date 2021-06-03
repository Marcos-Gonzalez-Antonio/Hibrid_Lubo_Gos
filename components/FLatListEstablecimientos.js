import React from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import obtenerEstablecimiento from '../screens/DetallesEstablecimientos'

const FlatlistEstablecimiento = (props) => {
  const navigation = useNavigation();
  const {establecimientoh} = props
  
  return (
    <View>
      <FlatList
        data = {establecimientoh}
        renderItem = { (establecimiento) => <Item establecimiento = {establecimiento} navigation = {navigation}/> }
        keyExtractor = {(index) => index.toString() }
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
  const {establecimiento,navigation} = props;
  const {NombreEstablecimiento,idEstablecimiento} = establecimiento.item;
  
  return (
    <TouchableOpacity style={{flex:1, flexDirection:'row', marginBottom:3}}

    onPress={() => navigation.navigate("DetallesEstablecimientos",{idEstablecimiento:idEstablecimiento}) }>
    <View style={{flex:1, justifyContent:'center', margin:5}}>
      <Text style={{ fontSize: 18, color: 'black', fontWeight: "bold",}}>{NombreEstablecimiento}</Text>

      </View>
    </TouchableOpacity>
  )
}

export default FlatlistEstablecimiento
