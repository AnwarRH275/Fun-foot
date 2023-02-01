import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {COLORS, ROUTES} from '../../constants';
import Background from '../../components/Background';
import Header from '../../components/Header';
import NavigationCat from '../../components/NavigationCat';
import StartGame from '../../components/StartGame';
import Scores from '../../components/Scores';
import GameStage1 from '../game/GameStage1';
import banner from '../../assets/game/5000.png'
import path from '../../assets/onboarding3.png'

const Home = ({navigation}) => {
 
  
  
  return (
    <Background path={path}>

      <Header  />
      <Scores />
   
      <StartGame setStartGame = {ROUTES.GAME_S1} banner={banner} />
   
    
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});