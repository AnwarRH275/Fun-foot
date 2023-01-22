import { View, Text, StyleSheet, Image, TouchableOpacity ,Platform} from 'react-native'
import React, { useState } from 'react'
import banner from '../assets/Banner.png';
import NavigationCat from './NavigationCat';
import { COLORS, ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const StartGame = ({setStartGame}) => {
  const [typeGame,setTypeGame] = useState('Espagnol');
  const navigation = useNavigation();


  const handlePress = () => {
    console.log(typeGame)
    navigation.navigate(ROUTES.GAME_S1,{typeGame});
  }


  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
            <Image style={styles.image} source={banner} />

           
        </View>
        <NavigationCat setTypeGame={setTypeGame} />
        <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.containerbtn}
            onPress={handlePress}
            >
                    
                    <Text style={styles.text}>Jouer</Text>
            </TouchableOpacity>
        </View>
       
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
    // width:"90%",
    // height:200, 
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
        
    },
    containerbtn:{
       
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
  });
  