import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require('../assets/onboarding3.png')}
        style={{height:'100%',width:'100%'}}
      >
        
             {children}
        
      </ImageBackground>
    </View>
  )
}

export default Background