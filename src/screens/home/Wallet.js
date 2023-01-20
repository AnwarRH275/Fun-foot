
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import Background from '../../components/Background';
import Header from '../../components/Header';

const Wallet = () => {

  return (
    <Background>
      <Header  />
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Wallet!</Text>
    </View>

    </Background>
    
  );
};

export default Wallet;