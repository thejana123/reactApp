import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmailScreen = () => {
  const[code, setCode] =useState('');
 

  const {height} =useWindowDimensions();
  const navigation = useNavigation();

  const onConfirmPressed = () =>{
    navigation.navigate('HomeScreen');
  }
  const onResendPressed = () =>{
    navigation.navigate('SignIn');
  }

    const onSignInPressed =() => {
      
  };
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Your Email</Text>
    

      <CustomerInput
       placeholder="Enter the Code"
       value={code}
       setValue={setCode}/>

      

      <CustomButton 
      text="Confirm" 
      onPress={onConfirmPressed}/>

      <CustomButton 
      text="Resend Code" 
      onPress={onSignInPressed} 
      type= "SECONDARY"/>

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
export default ConfirmEmailScreen;