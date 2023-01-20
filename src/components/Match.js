import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Match = () => {

  return (
    <View style={styles.container}>
      <Text>ss</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:330,
    height:60,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(154, 154, 154, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 10,
    marginVertical:6,
    order: 2,
    flexGrow: 0,
    
    
  },
});

export default Match;
