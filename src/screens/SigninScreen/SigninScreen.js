import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomerInput from '../../components/CustomerInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButtons from '../../components/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
  const[username, setUsername] =useState('');
  const[password, setPassword] =useState('');

  const {height} =useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () =>{
    
  navigation.navigate('HomeScreen');
  }
  
  const onForgotPasswordPressed =() => {
    
  navigation.navigate('ForgotPassword');
  }

  const onSignUpPressed =() => {
      
  navigation.navigate('SignUp');
  };
  return (
    <ScrollView>
    <View style={styles.root}>

      <Image 
      source={Logo} 
      style={[styles.logo, {height: height * 0.3}]} 
      resizeMode="contain"/>

      <CustomerInput
       placeholder="Username"
       value={username}
       setValue={setUsername}/>

      <CustomerInput 
       placeholder="Password" 
       value={password} 
       setValue={setPassword} 
       secureTextEntry={true}/>
      
      <CustomButton 
      text="Sign In" 
      onPress={onSignInPressed}/>

      <CustomButton 
      text="Forgot password" 
      onPress={onForgotPasswordPressed} 
      type= "TERTIARY"/>

      <SocialSigninButtons/>
      
       <CustomButton 
      text="Don't have an account?" 
      onPress={onSignUpPressed} 
      type= "TERTIARY"/>

    </View>
    </ScrollView>
  );
};
const styles= StyleSheet.create({  
    root:{
        alignItems: 'center',
        padding:30,
    },
    logo:{
        width:"70%",
        maxWidth:300,
        maxHeight: 200,
        height:200,
        marginVertical:10,
        borderRadius:20,
       
        
    },
});
export default SigninScreen;