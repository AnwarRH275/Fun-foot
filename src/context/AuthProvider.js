import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  axiosInstance  from '../config/instance';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [scores,setScores] = useState(0);
  const [mesgrids,setMesgrids] = useState([]);
  const [coupons,setCoupons] = useState('');
  const [username,setUsername] = useState('')

  useEffect(() => {
    const checkToken = async () => {
      try {
        let gettoken = await AsyncStorage.getItem('token');
        let username =  await AsyncStorage.getItem('username');
        let getcoupons =  await AsyncStorage.getItem('coupons');
       // console.log(gettoken)
        if (gettoken) {
           //console.log(gettoken)
           setUsername(username);
            setToken(gettoken);
            setCoupons(getcoupons);
            
            try {
              const response = await axiosInstance.get(`Scores/scores/${username}`, {
                headers: {
                  Authorization: `Bearer ${gettoken}`,
                },
              });
            //  if(response.data){
            //   setScores(response.data.scores);
            //  }
             // console.log(response.data.scores)
              setScores(response.data.scores);
              
            } catch (error) {
            console.error(error);
            }
            try {
              const response = await axiosInstance.get(`mesgrid/mesgridDistinct/${username}`, {
                headers: {
                  Authorization: `Bearer ${gettoken}`,
                },
              });
             
              setMesgrids(response.data);
              //console.log(mesgrids)
            } catch (error) {
              console.error(error);
            }
        }
       // setIsLoading(false);
      } catch (error) {
        console.error(error);
      }

          
    };
    checkToken();
  }, [scores]);


  return (
    <AuthContext.Provider value={{username, token, setToken,scores,setScores,mesgrids,setMesgrids,coupons,setCoupons }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
