import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './style';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';


export default () => {

    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async() => {

            const token = await AsyncStorage.getItem('token');
            if(token != null){
                //validar o token
            } else {
                //redireciona para login
                navigation.navigate('SingIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>
            <LoadingIcon size="large" color="#fff"/>
        </Container>
    );
}