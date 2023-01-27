import { View, Text, StyleSheet, Image, TouchableOpacity ,Platform} from 'react-native'
import React, { useState } from 'react'

import NavigationCat from './NavigationCat';
import { COLORS, ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const StartGame = ({setStartGame,banner}) => {
  const [typeGame,setTypeGame] = useState('Espagnol');
  const navigation = useNavigation();


  const handlePress = () => {
   
    navigation.navigate(setStartGame,{typeGame});
  }


  return (
    <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
        <View style={styles.container}>
            <Image style={styles.image} source={banner} />
        </View>
        <NavigationCat setTypeGame={setTypeGame} handlePress={handlePress} />
          {/* <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.containerbtn}
            onPress={handlePress}
            >  
              <Text style={styles.text}>Jouer</Text>
            </TouchableOpacity>
          </View>  */}

          <View style={styles.footer} ></View>
     </View>
  )
}

export default StartGame;

const styles = StyleSheet.create({
    container: {
      flex:1,
      width:"100%",
     // height: 94,
      alignItems:"center"

      //backgroundColor: '#FFFFFF',
    },
    image:{
    marginTop:10,  
    width:"100%",
    // height:200, 
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
        
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
          bottom:25,
          height:10,
          borderRadius:20,
          right: Platform.OS==='ios' ? 10 : 0,
          left: Platform.OS==='ios' ? 10 : 0,
          
          
      }
  });
  