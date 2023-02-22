import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../components/Background'
import Header from '../../components/Header'
import path from '../../assets/onboarding3.png'
import Switch from '../../components/Switch'
import ParieEncours from './ParieEncours'
import ParieTerminer from './ParieTerminer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from '../../config/instance'
import { useAuth } from '../../context/AuthProvider'

const Historique = () => {
  const [selectSection,setSelectSection] = useState(true);
  const { mesgrids, setMesgrids,username,token } = useAuth();
  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   console.log({ mesgrids, setMesgrids,username,token})
  //   try {
  //     const response = await axiosInstance.get(`mesgrid/mesgridDistinct/${username}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response.data);
  //     setMesgrids(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  return (
    <Background path={path}>
        <Header />
        <View style={styles.container}>
          <Switch typeGame={"En cours"} resultat="Terminer" setSelectSection={setSelectSection} />
         {selectSection ? (
          <ParieEncours  mesgrids={mesgrids}/>
          // <Text>sss</Text>
         ):(
          <ParieTerminer />
         )}
          
          
        </View>       
    </Background>
  )
}

export default Historique;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(3, 3, 3, 0.4)',
    shadowColor: 'rgba(3, 3, 3, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    paddingTop: 6,
    paddingBottom: 10,
    margin:10,
    marginBottom:Platform.OS === 'android' ? 30:40
  },
});