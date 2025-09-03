import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Login from './src/screens/login/index';

export default function App() {
  const ContainerApp = styled.SafeAreaView`
  flex: 1;
  background-color: '#000';
  `
  return (
    <ContainerApp>
       <StatusBar hidden />
      <Login />
    </ContainerApp>
  );
}