import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Switch, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Match from '../../components/Match';
import Scores from '../../components/Scores';
import { COLORS } from '../../constants';

const GameStage1 = ({route}) => {
  const [selectedIndex, setSelectedIndex] = useState(true);
  const { typeGame } = route.params;
    const  data = [
        {number: '1',equipe1:'ALMERIA',equipe2:'ATLETICO MADRID',status:''},
        {number: '2',equipe1:'GIRONA',equipe2:'SEVILLE',status:''},
        {number: '3',equipe1:'SOCIEDAD',equipe2:'ATHLETIC BILBAO',status:''},
        {number: '4',equipe1:'VALLADOLID',equipe2:'RAYO VALLECANO',status:''},
        {number: '5',equipe1:'PONFERRADINA',equipe2:'EIBAR',status:''},
        {number: '6',equipe1:'LEGANES',equipe2:'LEVANTE',status:''},
        {number: '7',equipe1:'HUESCA',equipe2:'TENERIFE',status:''},
        {number: '8',equipe1:'LUGO',equipe2:'OVIEDO',status:''},
        {number: '9',equipe1:'VALLADOLID',equipe2:'VILLARREAL B',status:''},
        {number: '10',equipe1:'SOCIEDAD',equipe2:'ATHLETIC BILBAO',status:''},
        {number: '11',equipe1:'VALLADOLID',equipe2:'RAYO VALLECANO',status:''},
        {number: '12',equipe1:'VALLADOLID',equipe2:'RAYO VALLECANO',status:''},
      ];

  return (

    <Background >
      <Scores />
      <View style={styles.container}>
          <View style={styles.containerSwitch}>
          <TouchableOpacity style={
            [
              styles.button,
              {
              backgroundColor: selectedIndex ? COLORS.red : COLORS.gray
            },
            ]}
            onPress={() => setSelectedIndex(true)}
            >
            <Text style={[styles.text,
            {color:  selectedIndex ? COLORS.gray : COLORS.dark,}
            ]}>{typeGame}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={
            [
              styles.button,
              { 
              backgroundColor: selectedIndex ? COLORS.gray : COLORS.red,
              
            },
            ]}
            onPress={() => setSelectedIndex(false)}
          >
            <Text style={[styles.text,
            {color:  selectedIndex ? COLORS.dark : COLORS.gray,}
            ]}>Resultat</Text>
          </TouchableOpacity>
          </View>
        
          <FlatList
          data={data}
          renderItem={({ item,index }) => (
            <Match key={item.number} number={item.number} equipe1={item.equipe1}  equipe2={item.equipe2}  />
          )}
          keyExtractor={item => item.number}
        />
      </View>

    </Background>
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
    alignItems: 'center',
    padding: 20,
    paddingTop: 6,
    paddingBottom: 10,
    margin:10,
    marginBottom:130
  },
  containerSwitch:{
    width: 340,
    height: 60,
    backgroundColor: '#F2F8FF',
    borderRadius: 20,
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10,
   
  },
  button: {
    marginVertical:10,
    marginHorizontal:10,
    width: 151,
    height: 38,
   // margin:10,
    justifyContent:'center',
    backgroundColor: '#FF793F',
    borderRadius: 20,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight:'bold'
    //padding: 12,
   // color: 'white'
  }
});

export default GameStage1;
