import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from "./HomeStack";
import EstabStack from "./EstabStack";
import MapaRepStack from "./MapaRepStack"
import { AuthContext } from '../components/context';


function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon
            name="exit-to-app"
            color={color}
            size={size}
          />
        )}
        label="Cerrar sesion"
        onPress={() => { signOut() }}
      />
       <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>

  )
}
const DrawerNavigator = createDrawerNavigator();


export default function Navegadores(props) {
  return (
    <DrawerNavigator.Navigator drawerContentOptions={{
      activeTintColor: '#F02DF3',
      itemStyle: { marginVertical: 5 },
    }} drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerNavigator.Screen name="HomeLubo" options={{ title: "HomeLubo" }} component={HomeStack} />
      <DrawerNavigator.Screen name="establecimientos" options={{ title: "Establecimientos" }} component={EstabStack} />
      <DrawerNavigator.Screen name="maparepartidor" options={{ title: "Mapa Repartidor" }} component={MapaRepStack} />
    </DrawerNavigator.Navigator>



  );
}
