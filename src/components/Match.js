import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const Match = ({number,equipe1,equipe2}) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}> 
        <View style={{width:130}}>
          <Text>{equipe1}</Text>
          <Text>{equipe2}</Text>  
        </View>
       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  width:330,
   
    // width:'100%',
    height:60,

    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(154, 154, 154, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 10,
    marginVertical:5,
   // marginHorizontal:5   

    
    
  },
  containerRow:{
    flexDirection: 'row',
    //justifyContent: 'space-around',
    // marginHorizontal:10,
   // marginVertical:10,
   marginLeft:5,
    alignItems: 'center',
  },
  button: {
    position:'relative',
    width: '15%',
    height: 40,
    margin:10,
    right:10,
    borderColor:'black',
    backgroundColor: '#F3F4F5',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  }
});

export default Match;
