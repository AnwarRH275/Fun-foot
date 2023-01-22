import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';
import ticket from '../assets/game/golden-ticket.png'
import coin from '../assets/game/coin.png'
const Scores = () => {
  return (
    <View style={styles.row}>
        <View style={styles.container}>
            <Image source = {ticket}  style={{width:50 , height:40 , left:7}} /> 
            <Text style={{color:COLORS.white, right:5,fontSize:35}}> 50</Text>
        </View>
        <View style={styles.container}  >
        <Image source = {coin} style={{width:30 , height:30, left:7 }} /> 
        <Text style={{color:COLORS.white, right:5,fontSize:35}}> 1250</Text>
        </View>
       
    </View>
   
  )
}

export default Scores;


const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
      
        flexDirection:'row',
        marginHorizontal:35,
        marginVertical:15,
        padding: 2,
        width: 128,
        height: 46,
        backgroundColor: 'rgba(3, 3, 3, 0.8)',
        borderRadius: 10,
        
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
        
      //backgroundColor: '#FFFFFF',
    },
    
});
