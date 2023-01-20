import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import banner from '../assets/Banner.png';
import NavigationCat from './NavigationCat';


const StartGame = ({setStartGame,setTypeGame}) => {
  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
            <Image style={styles.image} source={banner} />

           
        </View>
        <NavigationCat setTypeGame={setTypeGame} />
        <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.containerbtn}
            onPress={()=>setStartGame(false)}
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
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
        
    },
    containerbtn:{
       
        marginBottom:150,
        width: 283,
        height: 50,
        backgroundColor: '#5142E6',
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
  