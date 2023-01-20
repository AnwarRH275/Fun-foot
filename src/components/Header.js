import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import menu from '../assets/align-left.png';
import dollar from '../assets/tabBar/dollar.png'
import { COLORS } from '../constants';
import MySection from './MySection';

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
            <TouchableOpacity style={styles.profileButton} onPress={() => { /* handle profile button press */ }}>
                <Icon name="ios-person" size={24} color="#1D3557" style={styles.menuB} />
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
        paddingHorizontal: 30,
        paddingVertical:20,
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