import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomerInput from '../../components/CustomerInput';
import CustomButton from '../../components/CustomButton';
import  SelectList from 'react-native-dropdown-select-list';
import SocialSigninButtons from '../../components/SocialSigninButtons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const[username, setUsername] =useState('');
  const[email, setEmail] =useState('');
  const[password, setPassword] =useState('');
  const[passwordRepeat, setPasswordRepeat] =useState('');
  const[phoneNumber, setphoneNumber] =useState('');
  const[city, setcity] =useState('');
  const[selected, setSelected] = React.useState("");
  const data= [
    {key:'1', value:'Sri Lanka'},
    {key:'2', value:'India'},
    {key:'3', value:'USA'},
    {key:'4', value:'England'},
    {key:'5', value:'Japan'},
  ];

  const navigation = useNavigation();

  const onRegisterPressed = () =>{
    navigation.navigate('ConfirmEmail');
  }

    const onSignInPressed =() => {
      navigation.navigate('SignIn'); 
  };
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Register New Account</Text>
    

      <CustomerInput
       placeholder="Username"
       value={username}
       setValue={setUsername}/>

      <CustomerInput
       placeholder="Email"
       value={email}
       setValue={setEmail}/>

      <CustomerInput 
       placeholder="Password" 
       value={password} 
       setValue={setPassword} 
       secureTextEntry={true}/>

      <CustomerInput
       placeholder="Repeat Password"
       value={passwordRepeat}
       setValue={setPasswordRepeat}
       secureTextEntry={true}/>
      
      <CustomerInput
       placeholder="Mobile Number"
       value={phoneNumber}
       setValue={setphoneNumber}/>

      <CustomerInput
       placeholder="City"
       value={city}
       setValue={setcity}
       />
       <View style={styles.drop}>
       <SelectList 
       data={data} 
       setSelected={setSelected}
       
        />
      </View>

      <CustomButton 
      text="Register" 
      onPress={onRegisterPressed}/>

      <SocialSigninButtons/>

      <CustomButton 
      text=" Have an account? Sign In" 
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
export default RegisterScreen;