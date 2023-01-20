
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../../components/Background';
import Header from '../../components/Header';
import {COLORS} from '../../constants';

const Notifications = () => {
  return (
    <Background >
      <Header />
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Notification!</Text>
    </View>

    </Background>
   
  );
};

export default Notifications;

const styles = StyleSheet.create({});