import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import WalkthroughScreen from './WalkthroughScreen/WalkthroughScreen';
import WalkthroughAppConfig from './WalkthroughAppConfig';
import DynamicAppStyles from './DynamicAppStyles';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/Ionicons';
import logoGoogle from '../../assets/logo/logoGoogle.png';
import logoApple from '../../assets/logo/logoApple.png';
import logoMeta from '../../assets/logo/logoMeta.png';

const Register = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [checked, setChecked] = useState(false);


  return (
       <View style={{flex:1}}>
       {showRealApp ? (
        <View  style={{flex:1}}>
         
        <WalkthroughScreen 
                         
        appConfig={WalkthroughAppConfig}
        appStyles={DynamicAppStyles}
        // showRealAppw = {showRealApp}
       // nav = {navigation}
        setShowRealApp = {setShowRealApp}
        />
        </View>
       ):(
        <Background >
        <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              {/* <Logo width={55} height={55} style={styles.mr7} /> */}
              <Text style={styles.brandName}>DIR NIYA FOOT</Text>
            </View>

            <Text style={styles.loginContinueTxt}>Create an account</Text>
           <View style={styles.inputContainer}>
              <Icon name="person-circle-outline" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Username"
                onChangeText={text => setText(text)}
                value={text}
              />
            </View> 

            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Email"
                onChangeText={text => setText(text)}
                value={text}
              />
            </View> 
            
            <View style={styles.inputContainer}>
              <Icon name="lock-closed" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Password"
                secureTextEntry={hidePassword}
                onChangeText={password => setPassword(password)}
                value={password}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                  <Icon
                    name={hidePassword ? "ios-eye-off" : "ios-eye"}
                    size={22}
                    color="#1D3557"
                    style={styles.inputIcon}
                  />
              </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
              <Icon name="lock-closed" size={25} color="#1D3557" style={styles.inputIcon} />
              <TextInput
                style={styles.inputT}
                placeholder="Confirme password"
                secureTextEntry={hidePassword}
                onChangeText={password => setPassword(password)}
                value={password}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                  <Icon
                    name={hidePassword ? "ios-eye-off" : "ios-eye"}
                    size={22}
                    color="#1D3557"
                    style={styles.inputIcon}
                  />
              </TouchableOpacity>
          </View>

            <View style={styles.loginBtnWrapper}>
          
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.HOME)}
                  activeOpacity={0.7}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>SE CONNECTER</Text>
                </TouchableOpacity>
      
            </View>

          </View>
            <View style={styles.forgotPassBtn}>
                <Text style={{...styles.forgotPassText,fontSize: 18,top:22}}>Vous pouvez vous connecter via :  </Text>
            </View>

            <View style={styles.containerMedia}>
              <TouchableOpacity style={styles.mediabtn} onPress={() => {}}>
              <Image
                  style={styles.image}
                  source={logoGoogle}
              />

              </TouchableOpacity>
              <TouchableOpacity  style={styles.mediabtn} onPress={() => {}}>
              <Image
                  style={styles.image}
                  source={logoMeta}
              />
              </TouchableOpacity>
              <TouchableOpacity  style={styles.mediabtn} onPress={() => {}}>
              <Image
                  style={styles.image}
                  source={logoApple}
              />
              </TouchableOpacity>
            </View>

          
       </View>
       </SafeAreaView>
       </Background>
       )}
      </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mediabtn:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 68,
    height: 55,
    marginHorizontal:10,
    top:50,
    backgroundColor: '#F1FAEE',
    borderRadius: 10,
  },
  containerMedia:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  box: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4F8EF7',
    backgroundColor:COLORS.white
  },
  checked: {
    backgroundColor: COLORS.green,
  },
  containerCheck: {
    flexDirection: 'row',
    left:5,
    top:5,
    button:5,
   // alignSelf: 'flex-start',
    //justifyContent: 'center',
  
  },
  textCheck:{

    top:2,
    left:2,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: COLORS.white,
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
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    top:70
    // justifyContent: 'center',
  },
  brandName: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.white,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.white,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 21,
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    backgroundColor: COLORS.bgInput,
    color: COLORS.dark,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
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
    backgroundColor: COLORS.red,
    shadowColor: COLORS.red,
    shadowOffset: { width: 0, height: 0 },
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
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
  forgotPassText: {
    top:4,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
   
    // backgroundColor:COLORS.white,
    padding:10,
    borderRadius:10,
   
    textAlign: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    
    
  },
  footerText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.red,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});