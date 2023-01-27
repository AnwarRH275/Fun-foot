import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import Header from '../../components/Header'
import path from '../../assets/onboarding3.png'
import Switch from '../../components/Switch'
import ParieEncours from './ParieEncours'
import ParieTerminer from './ParieTerminer'


const Historique = () => {
  return (
    <Background path={path}>
        <Header />
        <View style={styles.container}>
          <Switch typeGame={"Parie en cours"} resultat="Parie Terminer" />
          <ParieEncours />
          <ParieTerminer />
        </View>       
    </Background>
  )
}

export default Historique;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(3, 3, 3, 0.4)',
    shadowColor: 'rgba(3, 3, 3, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    paddingTop: 6,
    paddingBottom: 10,
    margin:10,
    marginBottom:Platform.OS === 'android' ? 30:40
  },
});