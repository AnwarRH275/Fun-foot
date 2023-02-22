import { View, Text, StyleSheet, Image ,Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import NavigationCat from './NavigationCat';
import { COLORS, ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import InformationGame from './InformationGame';
import { useAuth } from '../context/AuthProvider';
import condition100 from '../assets/game/100.jpg';
import condition150 from '../assets/game/150.jpg';
import condition1000 from '../assets/game/1000.jpg';

const StartGame = ({setStartGame,banner}) => {

  const { scores, setScores } = useAuth();
  
  const [descriptionGame,setDesciptionGame] = useState('');
  useEffect(()=>{
    if(setStartGame == ROUTES.GAME_S1){
      setDesciptionGame('Choisissez votre grille!')
    }else{
      if (setStartGame == ROUTES.GAME_S2) {
        setDesciptionGame('Choisissez votre grille!')
        
      } else {
        if(setStartGame == ROUTES.GAME_S3){
          setDesciptionGame('Choisissez votre grille!')
        }else{
          setDesciptionGame('Choisissez votre grille!')
        }
      }
    }
  },[descriptionGame])

  return (
    
    <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
   
      
      <View style={styles.container}>
          <Image style={styles.image} source={banner} />
      </View>
      
      {setStartGame == ROUTES.GAME_S1 && setStartGame != ROUTES.GAME_S2 &&
      setStartGame != ROUTES.GAME_S3 && setStartGame != ROUTES.GAME_S4 && (
      <View>
          <InformationGame text={descriptionGame}/>
          <NavigationCat setStartGame={setStartGame} />
      </View>
      )}

{setStartGame != ROUTES.GAME_S1 && setStartGame == ROUTES.GAME_S2 &&
      setStartGame != ROUTES.GAME_S3 && setStartGame != ROUTES.GAME_S4 && scores >= 100 && (
      <View>
          <InformationGame text={descriptionGame}/>
          <NavigationCat setStartGame={setStartGame} />
      </View>
      )}

{setStartGame != ROUTES.GAME_S1 && setStartGame == ROUTES.GAME_S2 &&
      setStartGame != ROUTES.GAME_S3 && setStartGame != ROUTES.GAME_S4 && scores <= 100 && (
      <View style={styles.content}>
          <Image style={styles.imageC} source={condition100} />
      </View>
      )}
     


     {setStartGame != ROUTES.GAME_S1 && setStartGame != ROUTES.GAME_S2 &&
      setStartGame == ROUTES.GAME_S3 && setStartGame != ROUTES.GAME_S4 && scores >= 150 && (
      <View>
          <InformationGame text={descriptionGame}/>
          <NavigationCat setStartGame={setStartGame} />
      </View>
      )}


{setStartGame != ROUTES.GAME_S1 && setStartGame != ROUTES.GAME_S2 &&
      setStartGame == ROUTES.GAME_S3 && setStartGame != ROUTES.GAME_S4 && scores <= 150 && (
      <View style={styles.content}>
          <Image style={styles.imageC} source={condition150} />
      </View>
      )}

{setStartGame != ROUTES.GAME_S1 && setStartGame != ROUTES.GAME_S2 &&
      setStartGame != ROUTES.GAME_S3 && setStartGame == ROUTES.GAME_S4 && scores >= 1000 && (
      <View>
          <InformationGame text={descriptionGame}/>
          <NavigationCat setStartGame={setStartGame} />
      </View>
      )}

{setStartGame != ROUTES.GAME_S1 && setStartGame != ROUTES.GAME_S2 &&
      setStartGame != ROUTES.GAME_S3 && setStartGame == ROUTES.GAME_S4 && scores <= 1000 && (
      <View style={styles.content}>
          <Image style={styles.imageC} source={condition1000} />
      </View>
      )}


        <View style={styles.footer} ></View>

 


      </View>
  )
}

export default StartGame;

const styles = StyleSheet.create({
  content:{
    position:'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:350,
    //marginTop:60
  },
    container: {
      flex:1,
      width:"100%",
     // height: 94,
      alignItems:"center"

      //backgroundColor: '#FFFFFF',
    },
    imageC:{
     
    },
    image:{
    marginTop: 20,  
    width:"100%",
    // height:200, 
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
        
    },
    containerbtn:{
       flex:1,
        marginBottom:150,
        bottom:Platform.OS === 'android' ? 80:0,
        width: 283,
        height: 50,
        backgroundColor: COLORS.red,
        borderRadius: 56,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 35,
      },
      footer:{
          width:"94.5%",
          backgroundColor:COLORS.white,
          bottom:28,
          height:10,
          borderRadius:20,
          right: Platform.OS==='ios' ? 10 : 0,
          left: Platform.OS==='ios' ? 10 : 0,
          
          
      }
  });
  