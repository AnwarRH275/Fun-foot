import  React,{useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator';

export default function App() {

   const [isAuthenticated,setIsAuthenticated] = useState(true);
  return (
    <NavigationContainer>
       {/* { isAuthenticated ? (<AuthNavigator />) : (<DrawerNavigator />) }  */}
       {isAuthenticated ? (<AuthNavigator />):(<DrawerNavigator />)}
    </NavigationContainer>
  );
} 