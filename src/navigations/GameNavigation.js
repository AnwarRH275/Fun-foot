import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Profile, Settings, SettingsDetail} from '../screens';
import {ROUTES} from '../constants';
import GameStage1 from '../screens/game/GameStage1';
import GameStage2 from '../screens/game/GameStage2';
import GameStage3 from '../screens/game/GameStage3';
import GameStage4 from '../screens/game/GameStage4';

const Stack = createStackNavigator();

function GameNavigation() {

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}>
      <Stack.Screen
        options={{
            headerShown: false,
            
        }}
      name={ROUTES.HOME} component={Home} />
      
      <Stack.Screen
      
        options={{ tabBarStyle: { display: "none" }, }}
        name={ROUTES.GAME_S1} component={GameStage1} />
     
      
     <Stack.Screen
      
      options={{ tabBarStyle: { display: "none" }, }}
      name={ROUTES.GAME_S2} component={GameStage2} />
   
      <Stack.Screen
      
      options={{ tabBarStyle: { display: "none" }, }}
      name={ROUTES.GAME_S3} component={GameStage3} />
    
    <Stack.Screen
      
        options={{ tabBarStyle: { display: "none" }, }}
        name={ROUTES.GAME_S4} component={GameStage4} />
      </Stack.Navigator>
  );
}

export default GameNavigation;