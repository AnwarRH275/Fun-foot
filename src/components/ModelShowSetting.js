import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import {
    BottomSheetModal
  } from "@gorhom/bottom-sheet";
  import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';
import Separator from './Separateur';



  const ModelShowSetting = () => {
    const bottomSheetModalRef = useRef();

    const snapPoints = useMemo(()=> ["75%", "50%"],[]);

    const handleSheetChange = useCallback( index =>{
        console.log(index)
    }, [])

    return (
     
        <View style={styles.container}>
           
                <TouchableOpacity style={styles.profileButton} onPress={() => bottomSheetModalRef.current.present()}>
                    <Icon name="ios-person" size={24} color="#1D3557" style={styles.menuB} />
                </TouchableOpacity>

                <BottomSheetModal 
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={handleSheetChange}
                    backdropPressBehavior="hide"
                >
                    <Separator />
                    <View style={styles.contentContainer}>
                        
                        <Text style={styles.headerText}>Information profile</Text>
                      
                    </View>
            <View style={styles.containerInformation}>
            <View style={styles.inputContainer}>
              <Icon name="person-circle-outline" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Usename "
                onChangeText={text => {}}
              
                autoCapitalize="none"
                returnKeyType="done"
                
              />
            </View> 


            <View style={styles.inputContainer}>
              <Icon name="person-circle-outline" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Nom de complet"
                onChangeText={text => {}}
              
                autoCapitalize="none"
                returnKeyType="done"
                
              />
            </View> 
            
            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Email"
                onChangeText={text => {}}
              //  value={username}
                autoCapitalize="none"
                returnKeyType="done"
               
              />
            </View> 
            <View style={styles.inputContainer}>
              <Icon name="call-outline" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Numéro de téléphone"
                onChangeText={text => {}}
              //  value={username}
                autoCapitalize="none"
                returnKeyType="done"
                
              />
            </View> 
            <TouchableOpacity
                 //  onPress={handleSubmit}
                  activeOpacity={0.7}
                  style={styles.loginBtnWrapper}
                  >
                   <Text 
                  style={styles.loginText}
                  >Sauvegarder </Text> 
            </TouchableOpacity>
            </View>   

                </BottomSheetModal>
           
        </View>
       
    )
}


export default ModelShowSetting

const styles =  StyleSheet.create({
    containerInformation:{
     //top:30,
    // marginTop:40
    },
    contentContainer:{
         flex:1,
         alignSelf:'center',
        //marginBottom:10
        // justifyContent: 'center',

    },
    profileButton: {
        
        alignItems: 'center',
       // justifyContent: 'center',
       right:10
    },
    headerText:{
        //margin:17,
        
        fontSize:20,
        fontWeight:"800",
        //color:COLORS.dark
    },
    inputContainer: {
       // flex:1,
        flexDirection: 'row',
        marginTop:10,
       // alignItems: 'center',
         margin :20,
        backgroundColor: COLORS.grayLight,
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
       
      },
      loginBtnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
       
        margin:20,
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
        
      },

 });