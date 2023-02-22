
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';
import logoGoogle from '../assets/logo/Facebook.png';
import logoApple from '../assets/logo/TikTok.png';
import logoMeta from '../assets/logo/Instagram.png';


const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{height: 140}}>
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.containerMedia}>
              <TouchableOpacity style={styles.mediabtn} onPress={() => {Linking.openURL('https://www.facebook.com/');}}>
              <Image
                  style={styles.image}
                  source={logoGoogle}
              />

              </TouchableOpacity>
              <TouchableOpacity  style={styles.mediabtn} onPress={() => {Linking.openURL('https://www.instagram.com/');}}>
              <Image
                  style={styles.image}
                  source={logoMeta}
              />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.mediabtn} onPress={() => {Linking.openURL('https://twitter.com/');}}>
              <Image
                  style={styles.image}
                  source={logoApple}
              />
              </TouchableOpacity>
            </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
  mediabtn:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 68,
    height: 55,
    marginHorizontal:10,
    //top:150,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  containerMedia:{
    marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  image:{
    transform: [{scale: 0.7}],
  }
});