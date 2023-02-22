import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';
import ticket from '../assets/game/golden-ticket.png'
import coin from '../assets/game/coin.png'
const InformationGame = ({text}) => {


  return (
    <View style={styles.row}>
       
        <View style={styles.container}  >
        {/* <Image source = {coin} style={{width:28 , height:28, left:7 }} />  */}
        <Text style={{color:COLORS.white, right:5,left:5,fontSize:23,fontWeight:"600" , marginHorizontal:10,flexWrap: "wrap"}}> {text}</Text>
        {/* <Image source = {coin} style={{width:28 , height:28, right:7,left:5 }} />  */}
        </View>
       
    </View>
   
  )
}

export default InformationGame;


const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        top:Platform.OS === 'android' ? 0:0,
    },
        container: {
      
        flexDirection:'row',
        marginHorizontal:5,
        left:-16,
        marginVertical:46.5,
        padding: 0,
        paddingEnd:7,
        width: 275,
        height: 46,
        backgroundColor: COLORS.primary,//'rgba(3, 3, 3, 0.8)',
        // borderRadius: 10,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
        
      //backgroundColor: '#FFFFFF',
    },
    
});
