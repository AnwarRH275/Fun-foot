import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import Header from '../../components/Header'
import path from '../../assets/onboarding3.png'
import { COLORS } from '../../constants'

const Politique = () => {
  return (
    <Background path={path}>
      <Header />
      
      <View style={styles.containerd}>
          <Text style={styles.text}>En partageant ce code avec vos amis, vous pourrez gagner des points.</Text>
      </View>
    </Background>
  )
}

export default Politique




const styles = StyleSheet.create({
   
    row:{
      //flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      
      
    },
    containerd: {
      flexDirection:'row',
      justifyContent:'center',
  
      alignSelf:'center',
      padding: 18,
     
      marginVertical:30,
      width: 336,
      height: 125,
     
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#D1D1D6',
      borderRadius: 15,
    },
    container:{
      backgroundColor:COLORS.white,
      padding: 10,
      borderTopStartRadius:10,
      borderBottomStartRadius:10,
      borderColor:COLORS.dark,
      borderWidth: 1,
    },
    text:{
     textAlign:'center',
      fontWeight: '600',
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.32,
      color: '#000000',
    }
  })