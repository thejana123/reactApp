import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSigninButtons = () => {


    const onSignInFacebook =() => {
        console.warn("onSignInFacebook");
      }
    
      const onSignInGoogle =() => {
        console.warn("onSignInGoogle");
      }

  return (
    <>
       <CustomButton 
      text="Sign In with Facebook" 
      onPress={onSignInFacebook}
      bgColor= "#E7EAF4"
      fgColor="#DD4D44"
      />

       <CustomButton 
      text="Sign In with Google" 
      onPress={onSignInGoogle}
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
       
    </>
  )
}

export default SocialSigninButtons