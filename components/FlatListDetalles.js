import React from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity } from 'react-native'



const FlatlistDetalles = (props) => {
  
  const {organizacion} = props
  
  return (
    <View>
      <FlatList
        data = {organizacion}
        renderItem = { (organizacion) => <Item organizacion = {organizacion} /> }
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
  const {organizacion} = props;
  const {nombre,Colonia,Ciudad,Estado,email,informacion,} = organizacion.item;
  
  return (



    <View style={{flex:1, justifyContent:'center', margin:5}}>
      <Text style={{fontSize:18, color:'green'}}>{nombre}</Text>
      <Text style={{fontSize:18, color:'green'}}>{Colonia}</Text>
      <Text style={{fontSize:18, color:'green'}}>{Ciudad}</Text>
      <Text style={{fontSize:18, color:'green'}}>{Estado}</Text>
      <Text style={{fontSize:18, color:'green'}}>{email}</Text>
      <Text style={{fontSize:18, color:'green'}}>{informacion}</Text>

      </View>

  )
}

export default FlatlistDetalles
