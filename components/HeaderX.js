import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image,TouchableOpacity } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

function HeaderX(props,{navigation}) {

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
           <TouchableOpacity style={{alignItems:"flex-start", margin:16}} 
           onPress={() => navigation.openDrawer()}>
           <FontAwesome5 name="bars" size={24} color="#161924"/>
           </TouchableOpacity>
           
              
      
          </ScrollView>
        </View>
        <Image
          source={require("../assets/images/Logo1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(237,216,255,1)"
  },
  scrollArea: {
    top: 9,
    left: 0,
    height: 55,
    backgroundColor: "rgba(237,221,251,1)",
    position: "absolute",
    right: 0
  },
  scrollArea_contentContainerStyle: {
    height: 55
  },
  materialButtonTransparentHamburger: {
    height: 45,
    width: 48,
    marginLeft: 13
  },
  image: {
    left: 120,
    width: 106,
    height: 47,
    position: "absolute",
    top: 0
  },
  scrollAreaStack: {
    height: 64,
    marginTop: 17
  }
});

export default HeaderX;
