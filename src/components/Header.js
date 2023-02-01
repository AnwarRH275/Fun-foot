import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import menu from '../assets/align-left.png';
import dollar from '../assets/tabBar/dollar.png'
import { COLORS } from '../constants';
import MySection from './MySection';
import ModelShowSetting from './ModelShowSetting';

function Header() {

    const navigation = useNavigation();


    return (
        <View>
            
            <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity style={styles.menuButton} onPress={() => { navigation.openDrawer() }}>
                {/* <Icon name="ios-menu" size={24} color="#fff" /> */}
                <Image source={menu} style ={styles.menuB} />
            </TouchableOpacity>
            
            {/* <Text style={styles.scoreText}> <Image source ={dollar}/> 1000 <Image source ={dollar}/></Text> */}
            <TouchableOpacity style={styles.profileButton} onPress={() => <ModelShowSetting /> }>
                <Icon name="ios-person" size={24} color={COLORS.primary} style={styles.menuB} />
            </TouchableOpacity>
            
        </SafeAreaView>
      
        </View>
        
    );
}

const styles = StyleSheet.create({
    menuB:{
        width: 25,
        height: 25,
        margin:10,
        
        
    },
    headerContainer: {
        // height: 56,
       paddingHorizontal:Platform.OS === 'android' ? 10:30,
        paddingVertical:Platform.OS === 'android' ? 10:20,
        paddingTop:Platform.OS === 'android' ? 30:0,
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
    },
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        
        color: COLORS.red,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 32,
    },
    profileButton: {
        
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Header;
