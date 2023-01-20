
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Match from '../../components/Match';

const GameStage1 = ({typeGame}) => {

    const  data = [
        {number: '1',equipe1:'ALMERIA',equipe2:'ATLETICO MADRID',status:''},
        {number: '2',equipe1:'GIRONA',equipe2:'SEVILLE',status:''},
        {number: '3',equipe1:'SOCIEDAD',equipe2:'ATHLETIC BILBAO',status:''},
        {number: '4',equipe1:'VALLADOLID',equipe2:'RAYO VALLECANO',status:''},
      ];

  return (
    <View style={styles.container}>
        <ScrollView >
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
        </ScrollView>
    </View>
  );
}

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
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin:10
  },
});

export default GameStage1;
