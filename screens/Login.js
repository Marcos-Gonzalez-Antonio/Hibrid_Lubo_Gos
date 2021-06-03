import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  ActivityIndicator,
  Text
} from "react-native";

import { AuthContext } from '../components/context'
import { Input, Image, Button, Icon } from 'react-native-elements';
import Loader from '../components/Loader'

function Login(props) {
  const [cargando, setCargando] = useState(false);
  //const {setCargando,cargando} = props;
  console.log(cargando)
  const [showpassword, setShowpassword] = useState(false)
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_InputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const InputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_InputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_InputChange: false,
        isValidUser: false
      });
    }
  }
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  }
  const loginHandle = async (userName, password) => {
    setCargando(true);
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert('Fallo en credenciales!', 'Usuario o contraseña incorrecta.', [
        { text: 'Aceptar' }
      ]);
      setCargando(false);
      return;
    }

    await signIn(userName, password);

  }

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10
        }}
      >
        <Image
          source={require("../assets/images/Logo1.png")}
          style={{
            width: 300,
            height: 200,
            resizeMode: 'contain'
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={{
        marginTop: 35,
        justifyContent: "center",
        alignItems: "center"
      }} >
        <Input
          placeholder="Usuario"
          onChangeText={(val) => InputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          secureTextEntry={false}
          leftIcon={
            <Icon
              name='account'
              type='material-community'
              size={24}
              color='black'

            />
          }
          onChangeText={(val) => InputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
        />
        <Input
          placeholder="Password"
          password={true}
          onChangeText={(val) => handlePasswordChange(val)}
          autoCapitalize="none"
          secureTextEntry={!showpassword}
          rightIcon={<Icon
            type='material-community'
            name={showpassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.Icon}
            onPress={() => setShowpassword(!showpassword)}
          />}
          leftIcon={
            <Icon
              name='lock'
              type='material-community'
              size={24}
              color='black'
            />
          }

        />
        <Button
          title="Ingresar"
          onPress={() => { loginHandle(data.username, data.password) }}

          buttonStyle={{
            backgroundColor: "rgba(232, 107, 181 ,1)",
            borderRadius: 10,
            width: 150,
            height: 50,
          }}
        />

        <Text
          style={{
            marginTop: 25,
            color: "rgba(10, 32, 250,0.5)"
          }}
          onPress={() => props.navigation.navigate("RecuperarContrasena")}>Recuperar Contraseña</Text>
      </View>
      <Loader esVisible={cargando} texto="Cargando ... " />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1

  },
  container: {
    width: 380,
    height: 580
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    top: 68,
    width: 102,
    height: 111,
    position: "absolute",
    left: 33
  },
  rect7Filler: {
    flex: 1
  },
  rect7: {
    height: 8,

    marginBottom: 6,
    marginLeft: 2,
    marginRight: 3
  },
  image: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute",

    transform: [
      {
        rotate: "1.00deg"
      }
    ]
  },
  logoStack: {
    width: 200,
    height: 200,
    marginTop: 62,
    marginLeft: 96,

  }

});

export default Login;
