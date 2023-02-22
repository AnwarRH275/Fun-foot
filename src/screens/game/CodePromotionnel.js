import { View, Text, StyleSheet, TextInput, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import Header from '../../components/Header'
import path from '../../assets/onboarding3.png'
import { COLORS } from '../../constants'
import Icon from 'react-native-vector-icons/Ionicons';



const CodePromotionnel = () => {
  const handleSubmit = () =>{}
  return (
    <Background path={path}>
    <Header />
    
    <View style={styles.containerd}>
        <Text style={styles.text}>Gagnez 10 pièces en entrant le code promotionnel ou partagez votre code d'affiliation pour gagner 10 pièces chacun.  ✌🏻 🥂 </Text>
    </View>

    <View style = {styles.container}>
    <View style={styles.inputContainer}>
               
              <Icon name="pricetag" size={25} color="#1D3557" style={styles.inputIcon} />
             
              <TextInput
                style={styles.inputT}
                placeholder="Veuillez entrer le code d'affiliation"
                onChangeText={text => {}}
                // value={username}
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={() => {
              
                }}
              />
            </View> 

            <TouchableOpacity
                   onPress={handleSubmit}
                  activeOpacity={0.7}
                  style={styles.loginBtnWrapper}
                  >
                   <Text 
                  style={styles.loginText}
                  >Valider le code</Text> 
            </TouchableOpacity>
    </View>

  </Background>
  )
}

export default CodePromotionnel;



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
      height: 155,
     
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
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F1FAEE',
      borderRadius: 10,
      marginVertical:5,
  
      padding: 2,
    },
    inputIcon: {
      padding: 10,
    },
    inputT: {
      flex: 1,
      fontSize: 18,
      // paddingLeft: 10,
    },
    loginBtnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      gap: 10,
      position: 'relative',
      top:10,
      height: 47,
      backgroundColor: COLORS.primary,
      shadowColor: COLORS.white,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
      borderRadius: 10,
    },
    loginText: {
   
      height: 27,
      
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 27,
      color: '#F1FAEE',
      // flex: 'none',
      // order: 0,
      // flexGrow: 0,
    },
    container: {
      flex: 1,
     // justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    

  })