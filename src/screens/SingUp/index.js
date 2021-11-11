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

 import API from '../../Api';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';



export default () => {

    const navigation = useNavigation();

    const [nomeField, setNomeField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    
    const handleSigninClick = async () => {
        
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name: 'SingIn'}]
        });
           
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>    

            <InputArea>    
                <SignInput 
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu nome"
                    value={nomeField}
                    onChangeText={t=>setNomeField(t)}
                />  
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
                <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
                <SingMessageButtonTextBold>Login</SingMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}