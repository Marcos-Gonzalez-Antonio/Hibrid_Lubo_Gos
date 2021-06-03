import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator
} from "react-native";
import { Input,Image, Button, Icon } from 'react-native-elements';
import { useForm } from 'react-hook-form';

function RecuperarContrasena(props) {
  const { register, formState: { errors }} = useForm();
  return (
    <View>
    <View 
      style = {{
          justifyContent:"center",
          alignItems:"center",
          marginBottom: 10
      }} 
    >
        <Image
          source={require("../assets/images/Logo1.png")}
          style={{ width: 300,
                   height: 200,
                   resizeMode: 'contain'
                   }}
          PlaceholderContent={<ActivityIndicator/>}
        />
    </View>
    <View style={{
          marginTop:35,
          justifyContent:"center",
          alignItems:"center"
    }} >
      <Input
      type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        
        
      <Button
        title="Ingresar"
        onPress={() => alert('se ha enviado un codigo de verificacion a su correo electronico')} title="Enviar"
        
        buttonStyle={{
          backgroundColor: "rgba(232, 107, 181 ,1)",
          borderRadius:10,
          width:150,
          height:50,
        }}
      />
     
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    opacity: 0.66,
    backgroundColor: "rgba(239,140,140,1)",
    borderWidth: 1,
    borderColor: "rgba(239,225,225,1)"
  },
  background: {
    flex: 1
  },
  rect2: {
    flex: 1
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 40,
    flexDirection: "row",
    marginLeft: 38,
    marginRight: 15
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 5,
    marginTop: 16
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 4,
    marginTop: 4
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginTop: 16
  },
  icon2Row: {
    height: 40,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    width: 248,
    height: 32,
    marginTop: 84,
    marginLeft: 25
  },
  form: {
    height: 230,
    marginTop: 26,
    marginRight: 7
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 86
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  progressBarColumn: {
    marginTop: 53,
    marginLeft: 31,
    marginRight: 54
  },
  progressBarColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 102
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  textInput: {
    color: "rgba(255,255,255,0.5)",
    width: 130,
    height: 19,
    marginLeft: 86
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 31,
    marginRight: 51
  }
});

export default RecuperarContrasena;
