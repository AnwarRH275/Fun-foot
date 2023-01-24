import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Profile, Settings, SettingsDetail} from '../screens';
import {ROUTES} from '../constants';
import GameStage1 from '../screens/game/GameStage1';

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
      {/* <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} /> */}
      <Stack.Screen
      // options={{
      //   headerShown: true,
      //   tabBarVisible: false
      // }}

      options={{ tabBarStyle: { display: "none" }, }}
      name={ROUTES.GAME_S1} component={GameStage1} />
    </Stack.Navigator>
  );
}

export default GameNavigation;