import styled from 'styled-components/native';
import { StyleSheet,Animated } from 'react-native'
export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`;

export const Code = styled.View`
    align-self: center;
    overflow: hidden;
    background: #FFF;
    padding: 10px;
`;

export const Nav = styled.View`
    margin-top: 15px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.8);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.8);
`;

export const NavText= styled.Text`
    font-size: 15px;
    color: white;
    margin-left: 15px;
`;

export const SignOut = styled.TouchableOpacity`
    width: 100%;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 18px;
`;

export const SignOutText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 13px;
`;

