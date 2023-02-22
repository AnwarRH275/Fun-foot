import  React,{useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import { AuthProvider, useAuth } from './src/context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

   const [isAuthenticated,setIsAuthenticated] = useState(true);
   

   useEffect(() => {
    const checkToken = async () => {
      try {
       //await AsyncStorage.clear();
        const token = await AsyncStorage.getItem('token');
        //console.log(token)
        if (token) {
          setIsAuthenticated(false);
        }
       // setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    checkToken();
  }, []);


  return (
    
      <NavigationContainer>
        {/* { isAuthenticated ? (<AuthNavigator />) : (<DrawerNavigator />) }  */}
        <AuthProvider>
        {isAuthenticated ? (<AuthNavigator />):(
          
            <DrawerNavigator />
         
          
        )}
         </AuthProvider>
      </NavigationContainer>
   
  );
} 