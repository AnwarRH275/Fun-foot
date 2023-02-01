import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS } from '../constants';
import background from '../assets/ICONNAVIGATION/back.png'

const NavigationCat = ({setTypeGame,handlePress}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = [
    {number: 'N° 957',key:'Espagnol',date:'12/01/2023',time:'14:00'},
    {number: 'N° 957',key:'Special',date:'12/02/2023',time:'18:00'},
    {number: 'N° 957',key:'Fin de semaine',date:'17/01/2023',time:'16:00'},
    {number: 'N° 957',key:'Mi-semaine',date:'17/01/2023',time:'16:00'},
  ];


  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { borderColor: index === selectedIndex ? COLORS.dark : COLORS.white,
          backgroundColor: index === selectedIndex ? COLORS.white : COLORS.dark
        },
        ]}
        onPress={() => {
            setTypeGame(item.key)
            setSelectedIndex(index)
            handlePress()
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
                ]}>{item.number}</Text>

                <Text style={[
                styles.itemText2,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.key}</Text>
                <Text style={[
                styles.itemText3,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.date}</Text>
                 <Text style={[
                styles.itemText3,
                { color: index === selectedIndex ? COLORS.dark : COLORS.white },
                ]}>{item.time}</Text>
                
            {/* </View> */}

        </ImageBackground>
        
        
      </TouchableOpacity>
    );
};

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
    fontSize: 27,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  itemText2:{
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  itemText3:{
    fontWeight: '600',
    fontSize: 23,
    lineHeight: 39,
    textAlign: 'center',
    color: '#FFFFFF',
  }
};

export default NavigationCat;
