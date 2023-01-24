import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {COLORS} from '../../constants';
import Background from '../../components/Background';
import Header from '../../components/Header';
import NavigationCat from '../../components/NavigationCat';
import StartGame from '../../components/StartGame';
import Scores from '../../components/Scores';
import GameStage1 from '../game/GameStage1';


const Home = ({navigation}) => {
  const [startGame , setStartGame] = useState(true);
  
  
  return (
    <Background >

      <Header  />
      <Scores />
   
      <StartGame setStartGame = {setStartGame} />
   
    
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});