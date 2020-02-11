import React from 'react';
import { View } from 'react-native';

import Icons from '@expo/vector-icons/MaterialIcons'

import logo from '../../assets/Nubank_Logo.png'

import { Container, Top, Title, Logo } from './styles';

export default function Header() {
  return (
    <Container> 
        <Top>
            <Logo source={logo} />
            <Title>Pedro</Title>
        </Top>
        <Icons name='keyboard-arrow-down' size={20} color="#FFF" />
    </Container>
  );
}
