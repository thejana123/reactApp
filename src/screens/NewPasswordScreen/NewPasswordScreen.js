import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const[code, setCode] =useState('');
  const[newPassword, setNewPassword] =useState('');

  const {height} =useWindowDimensions();
  const navigation = useNavigation();
  const onSubmitPressed = () =>{
    console.warn("onSubmitPressed");
    navigation.navigate('HomeScreen');
  }

  const onSignInPressed = () =>{
    console.warn("onSignInPress");
    navigation.navigate('SignIn');
  }
  

  
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
    

      <CustomerInput
       placeholder="Enter Code"
       value={code}
       setValue={setCode}/>

<CustomerInput
       placeholder="Enter New Password"
       value={newPassword}
       setValue={setNewPassword}/>

      <CustomButton 
      text="Submit" 
      onPress={onSubmitPressed}/>

      <CustomButton 
      text="Back to sign In" 
      onPress={onSignInPressed} 
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
export default NewPasswordScreen;