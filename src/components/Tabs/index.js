import React from 'react';
import { View } from 'react-native';

import Icons from '@expo/vector-icons/MaterialIcons'
import logo from '../../assets/Pix_Logo.png'


import { Container, TabsContainer, TabItem, TabText } from './styles';
import { LogoPix } from '../Header/styles';

export default function Tabs({ translateY }) {
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.1],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <LogoPix source={logo} name="key" size={24} color="#FFF" />
                    <TabText>Pix</TabText>
                </TabItem>
                <TabItem>
                    <Icons name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icons name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icons name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icons name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icons name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
