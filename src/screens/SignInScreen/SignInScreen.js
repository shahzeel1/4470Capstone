import React, {useState} from 'react';
import {View, Text, Image,StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/WTH_logo.png';
import emailImage from '../../../assets/images/email2.png';
import passwordImage from '../../../assets/images/padlock.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

  



const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () =>
    {

    }
    const onForgotPasswordPressed = () =>
    {

    }

    

    return (
        <View>
        <View style = {styles.root}>
            <Image 
                source={Logo} 
                style = {[styles.logo, {height: height*0.3}]} 
                resizeMode='contain'/>
        </View>
        <View>
            <Text 
                style = {styles.h1}>
                Login
            </Text>
            <Text
                style = {styles.h2}>
                    Please sign in to continue
                </Text>
        </View>
        <View style = {styles.root}>
            <CustomInput 
                image = {emailImage}
                placeholder="EMAIL" 
                value = {username} 
                setValue={setUsername}/>
            <CustomInput
            image = {passwordImage}
                    placeholder="PASSWORD" 
                    value = {password} 
                    setValue={setPassword}
                    secureTextEntry={true}/>
            <CustomButton
                text="LOGIN"
                onPress = {onSignInPressed}/>
             <CustomButton
                text="Forgot Password"
                onPress = {onSignInPressed}
                type='TERTIARY'/>
        </View>
        <View>
            </View>

        </View>
    )
      
}

const styles = StyleSheet.create({
    root:
    {
        alignItems: 'center',
        padding: 20
    },
    logo:
    {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    },
    h1:
    {
        color: "#FFFFFF",
        fontFamily: 'Prompt',
        fontSize: 39,
        textAlign: 'left',
        paddingLeft: 20,
        paddingBottom: 10
    },
    h2:
    {
        paddingLeft: 20,
        fontFamily:'Prompt_500Medium',
        fontSize:15,
        color: '#0F6BAC'
    }
})

export default SignInScreen