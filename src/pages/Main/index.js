import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Icons from '@expo/vector-icons/MaterialIcons'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

import { Container, Content, Card, CardContent, CardFooter, CardHeader, Title, Description, Annotation } from './styles';

export default function pages() {
  let offset = 0;
  const Y = new Animated.Value(0);
  const animated = Animated.event(
    [
      {
        nativeEvent: {
          translationY: Y,
        }
      }
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100)
        opened = true;
      else {
        Y.setValue(offset);
        Y.setOffset(0);
        offset = 0;
      }

      Animated.timing(Y, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      })
        .start(() => {
          offset = opened ? 380 : 0;
          Y.setOffset(offset);
          Y.setValue(0);
        });
    }
  }

  return (
    <Container sty>
      <Header />
      <Content>
        <Menu translateY={Y} />

        <PanGestureHandler
          onGestureEvent={animated}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: Y.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-20, 0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}>
            <CardHeader>
              <Icons name="attach-money" size={28} color="#666" />
              <Icons name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 1.678.890,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebida hoje às 05:00h
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>
      <Tabs translateY={Y} />
    </Container>
  );
}
