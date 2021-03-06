import React from 'react';
import QRCode from 'react-native-qrcode-svg'
import Icons from '@expo/vector-icons/MaterialIcons'

import { Container, Code, Nav, NavItem, NavText, SignOut, SignOutText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1]
        }),
    }} >

      <Code>
        <QRCode value="https://github.com/romaniaph/" size={80} color="#8B10AE" backgroundColor="#FFF" />
      </Code>

      <Nav>
        <NavItem>
          <Icons name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icons name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icons name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icons name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOut onPress={() => { }}>
        <SignOutText>SAIR DO APP</SignOutText>
      </SignOut>
    </Container >
  );
}
