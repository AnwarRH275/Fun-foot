import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Wallet, Notifications} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import Historique from '../screens/game/Historique';
import Store from '../screens/game/Store';
import Affiliation from '../screens/game/Affiliation';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
          
        }}
      />

      <Drawer.Screen
        name={ROUTES.HISTORIQUE_DRAWER}
        component={Historique}
        options={{
          title: 'Mes grilles',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="wallet" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.STORE}
        component={Store}
        options={{
          title: 'Store',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="cart" size={18} color={color} />
          ),
        }}
      />
      

    <Drawer.Screen
        name={ROUTES.AFFILIATION}
        component={Affiliation}
        options={{
          title: 'Affiliation',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="ribbon" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;