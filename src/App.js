import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './navigation';
import { colors } from './utils'
import FlashMessage from "react-native-flash-message"



const App = () => {
  return (
  <> 
  <StatusBar barStyle = "dark-content" translucent={true} backgroundColor={colors.white} hidden={false} /> 
   <NavigationContainer>
     <Router />
   </NavigationContainer>
   <flashMessage position="top" />
  </> 
  )
}

export default App
