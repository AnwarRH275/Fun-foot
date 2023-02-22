import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Background from '../../components/Background';
import Header from '../../components/Header';
import StartGame from '../../components/StartGame';
import Scores from '../../components/Scores';
import banner from '../../assets/Banner/5000.png'
import path from '../../assets/game/background1.jpg'
import { ROUTES } from '../../constants';

const Wallet = ({navigation}) => {

  
  
  return (
    <Background path={path} >

      <Header  />
      {/* <Scores /> */}
   
      <StartGame setStartGame = {ROUTES.GAME_S2} banner={banner} />
   
    
    </Background>
  );
};

export default Wallet;

const styles = StyleSheet.create({});