import { View, Text, Button } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from "@gorhom/bottom-sheet";

const ModelShowSetting = () => {
    const bottomSheetModalRef = useRef(null);
    
    const snapPoints = ["48%"]

    const handlePresentModel = ()=>{
        bottomSheetModalRef.current?.present();

    }
    useEffect(()=>{
        handlePresentModel();
    },[])
  return (
    <BottomSheetModalProvider>
        <View>
            {/* <Button title='Press Model' onPress={handlePresentModel}/> */}
            
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
            >
                <View>
                    <Text>ModelShowSetting</Text>
                </View>
                 
            </BottomSheetModal>
        </View>
    </BottomSheetModalProvider>
    
  )
}

export default ModelShowSetting