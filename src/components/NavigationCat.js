import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { COLORS } from '../constants';
import background from '../assets/ICONNAVIGATION/back.png'
import axiosInstance from '../config/instance'
import AsyncStorage from '@react-native-async-storage/async-storage';
import loading_gif from '../assets/game/loading.gif'
import { useNavigation } from '@react-navigation/native';

const NavigationCat = ({setStartGame}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [token,setToken] = useState(null);
  const [categories,setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handlePress = (typeGame) => {
   
    navigation.navigate(setStartGame,{typeGame});
  }
  // const data = [
  //   {number: 'N° 957',key:'Espagnol',date:'12/01/2023',time:'14:00'},
  //   {number: 'N° 957',key:'Special',date:'12/02/2023',time:'18:00'},
  //   {number: 'N° 957',key:'Fin de semaine',date:'17/01/2023',time:'16:00'},
  //   {number: 'N° 957',key:'Mi-semaine',date:'17/01/2023',time:'16:00'},
  // ];



  useEffect(() => {



    const checkToken = async () => {
      try {
       // await AsyncStorage.clear();
        let gettoken = await AsyncStorage.getItem('token');
        
        if (gettoken) {
          setToken(gettoken);
        }
       // setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    checkToken();

    const fetchData = async () => {
       
      try {
        const response = await axiosInstance.get('/category/Categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
      //  console.error(error);
      }
    };
    fetchData();
  }, [token]);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
         {loading ? (
        <Image
        source={loading_gif}
        style={{ position:'relative',
       // alignItems: 'center',
       // justifyContent: 'center',
       // marginVertical:100,
        margin:14,
        marginBottom:200
        }}
      />
       
      ) : (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { borderColor: index === selectedIndex ? COLORS.dark : COLORS.white,
          backgroundColor: index === selectedIndex ? COLORS.white : COLORS.dark
        },
        ]}
        onPress={() => {

         
            console.log(item.categorie_match)
            setSelectedIndex(index)
            handlePress(item.categorie_match)
          }
        }
      >
        <ImageBackground  source={background}
         style={{...styles.buttonColumn,height:'115%',width:'110%',marginTop:"-10%"}}
        >
            {/* <View style={styles.buttonColumn}> */}
            
                <Text style={[
                styles.itemText,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>N° {item.numero_match}</Text>

                <Text style={[
                styles.itemText2,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.categorie_match}</Text>
                <Text style={[
                styles.itemText4,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.description}</Text>
                <Text style={[
                styles.itemText3,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.date}</Text>
                 <Text style={[
                styles.itemText3,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.heure}</Text>
                
            {/* </View> */}

        </ImageBackground>
        
        
      </TouchableOpacity>
      )}
      </View>
    );
};

  return (
    <View style={styles.container}>
      <FlatList
        //data={data}
        data={categories}
        renderItem={_renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = {
  container: {
   // flex: 1,

   position:'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:20,
    marginTop:60
    
  },
  buttonColumn:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    
    alignItems: 'flex-start',
    alignItems: 'center',
    padding: 9,
    margin: 10,
    marginBottom:180,
    width: 260,
    height: 230,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
   // borderColor: '#4B4B4B',
    borderRadius: 29,
  },
  itemText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  itemText2:{
    fontWeight: '800',
    fontSize: 23,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  itemText4:{
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  itemText3:{
    fontWeight: '800',
    marginVertical:-7,
    fontSize: 15,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  }
};

export default NavigationCat;
