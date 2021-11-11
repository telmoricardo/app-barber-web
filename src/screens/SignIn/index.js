import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,     
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SingMessageButtonText,
    SingMessageButtonTextBold

 } from './style';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import Api from '../../Api';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    
    const handleSigninClick = async() => {

        if(emailField != '' && passwordField != ''){           

             let res = await Api.signIn(emailField, passwordField);

             console.log(res);
                         
            if(res.token){

            } else {
                alert("E-mail e/ou senha errados!");
            }

        }else{
            alert("Preencha os campos!");
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name: 'SingUp'}]
        });
           
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>    

            <InputArea>      
                <SignInput 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                
                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite seu e-mail"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSigninClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SingMessageButtonText>Ainda não possui uma conta?</SingMessageButtonText>
                <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}