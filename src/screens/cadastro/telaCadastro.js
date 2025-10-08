import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";
import { LoginContainer } from "../login/styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Cadastro() {
  const[user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigation = useNavigation();

  const ContainerApp = styled.SafeAreaView`
    flex: 1;
    background-color: #2d2d2d;
    justify-content: center;
    align-items: center;
  `;
  const ViewLogoImage = styled.View`
    display: flex;
    align-items: center;
  `;

  const LogoImage = styled.Image`
    width: 200px;
    height: 200px;
  `;

  const TitleLogin = styled.Text`
    width: 300px;
    color: white;
    font-size: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
    display: flex;
  `;

  const EmailInput = styled.TextInput`
    width: 300px;
    height: 50px;
    background-color: 2d2d2d;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    padding-left: 10px;
  `;

  const EnterButton = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `;

  const TextButton = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
  `;

  const HaveAccount = styled.TouchableOpacity`
    width: 300px;
    margin-top: 5px;
    display: flex;
  `;

  const TextHaveAccount = styled.Text`
    color: #94b9ffff;
    font-size: 12px;
    text-decoration: underline;
  `;

  const BottomImageView = styled.View`
    display: flex;
    align-items: center;
  `;

  const BottomImage = styled.Image`
    width: 350px;
    height: 350px;
  `;

  return (
    <ContainerApp>
      <SafeAreaView>
        <StatusBar hidden />
        <LoginContainer>
          <ViewLogoImage>
            <LogoImage
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
            />
          </ViewLogoImage>
          <TitleLogin>Nome</TitleLogin>
          <EmailInput
            placeholder="Digite seu nome:"
            placeholderTextColor="white"
          />
          <TitleLogin>E-mail</TitleLogin>
          <EmailInput
            placeholder="Cadastre seu e-mail:"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <TitleLogin>Password</TitleLogin>
          <EmailInput
            placeholder="Defina sua senha:"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <EnterButton onPress={() => navigation.navigate("Log")}>
            <TextButton>Cadastrar</TextButton>
          </EnterButton>
          <HaveAccount onPress={() => navigation.navigate("Log")}>
            <TextHaveAccount>Já possui uma conta? Faça login</TextHaveAccount>
          </HaveAccount>

          <BottomImageView>
            <BottomImage
              source={require("../../assets/images/bottom-image.png")}
              resizeMode="contain"
            />
          </BottomImageView>
        </LoginContainer>
      </SafeAreaView>
    </ContainerApp>
  );
}
