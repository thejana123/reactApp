import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const[username, setUsername] =useState('');
 
  const navigation = useNavigation();

  const onSendPressed = () =>{
    navigation.navigate('NewPassword');
  }
  const onResendPressed = () =>{
    navigation.navigate('SignIn');
  }

  
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
    

      <CustomerInput
       placeholder="Username"
       value={username}
       setValue={setUsername}/>

      

      <CustomButton 
      text="Send" 
      onPress={onSendPressed}/>

      

      <CustomButton 
      text="Back to sign In" 
      onPress={onResendPressed} 
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
   
    drop:{
      
    width:'100%',
    paddingHorizontal:10,
    marginVertical:5,

    }, 
        
   
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#051C60',
      margin:10,
    }

});
export default ForgotPasswordScreen;