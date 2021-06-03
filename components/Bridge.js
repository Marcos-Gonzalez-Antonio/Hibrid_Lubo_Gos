
 import React, { useEffect, useState } from 'react';
 import { View, ActivityIndicator, Alert } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import * as SecureStore from 'expo-secure-store';
 
 //importar el perfil de navegacion como login y recuperar contrasenia
 import { AuthContext } from '../components/context.js';
 import Inicios from '../collapse/InicioStack';
 import Navegadores from '../collapse/Navegador';
 import Api from '../utils/Api.js';
 
 async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
 
 const Bridge = () => {
 
   const initialLoginState = {
     isLoading: true,
     userName: null,
     userToken: null,
   };
 
   const loginReducer = (prevState, action) => {
     switch( action.type ) {
       case 'RETRIEVE_TOKEN': 
         return {
           ...prevState,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGIN': 
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGOUT': 
         return {
           ...prevState,
           userName: null,
           userToken: null,
           isLoading: false,
         };
     }
   };
 
   const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
 
   const authContext = React.useMemo(() => ({
     signIn: async(userName,password) => {
        
        let userToken = null;
        //uso de apirest lubogo
        let parametros = {
          "user": userName,
          "password": password,
          "token": "",
          "plataforma": "Movil"
        };
        console.log(parametros)
        const loginApi = new Api("auth/loginAdministrador","POST",parametros);
        let result = loginApi.send();
            await result.then(res => {
              console.log(res)
              if (res.response) {
                userToken = res.result.token;
              } else {
                  alert("Error en las credenciales");
              }
                  
            });
       try {
         await SecureStore.setItemAsync('userToken', userToken);
       } catch(e) {
         console.log(e);
       }
       // console.log('user token: ', userToken);
       dispatch({ type: 'LOGIN', id: userName, token: userToken });
     },
     signOut: async() => {
       // setUserToken(null);
       // setIsLoading(false);
       try {
         await SecureStore.deleteItemAsync('userToken');
       } catch(e) {
         console.log(e);
       }
       dispatch({ type: 'LOGOUT' });
     },
     signUp: () => {
       // setUserToken('fgkj');
       // setIsLoading(false);
     }
   }), []);
 
   useEffect(() => {
     setTimeout(async() => {
       // setIsLoading(false);
       let userToken;
       userToken = null;
       try {
         userToken = await SecureStore.getItem('userToken');
       } catch(e) {
         console.log(e);
       }
       // console.log('user token: ', userToken);
       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
     }, 1000);
   }, []);
 
   if( loginState.isLoading ) {
     return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large"/>
       </View>
     );
   }
   return (
     
     <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            { loginState.userToken !== null ? ( <Navegadores/> ) :<Inicios/>}
        </NavigationContainer>
     </AuthContext.Provider>
    
   );
 }
 
 export default Bridge;
 