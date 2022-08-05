

import React from 'react';
import {
  SafeAreaView, 
  StyleSheet,
  Text,
  useColorScheme,
  
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';
import SigninScreen from './src/screens/SigninScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
 

const App = () => {
 

  return (
    <SafeAreaView style={styles.root}>
     <Navigation/> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor :'#f5f5f5',
    }
    
 
});

export default App;
