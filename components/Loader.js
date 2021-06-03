import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {Overlay } from 'react-native-elements';


export default function Loader(props){
    const {esVisible,texto} = props;

    return(
        <Overlay
            isVisible={esVisible}
            windowBackgroundColor = "rgba(0,0,0,0.5)"
            overlayBackgroundColor = "transparent"
            overlayStyle = {stilos.overlay}
        >
            <View style={stilos.vista}>
                <ActivityIndicator size="large" color="#F50AB7" />
                {/* if corto de solo return true */}
                {texto && <Text>{texto}</Text>}
            </View>
        </Overlay>
    );
}

const stilos = StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:"#fff",
        borderColor:"#F50AB7",
        borderWidth: 2,
        borderRadius:10
    },
    vista:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    texto:{
        color:"#F50AB7",
        textTransform:"uppercase",
        marginTop: 10
    }
});