import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";
import { LoginContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";


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

const ForgetPassword = styled.Text`
  color: #94b9ffff;
  text-decoration: underline;
  width: 300px;
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 5px;
  display: flex;
`;

const BottomImageView = styled.View`
  display: flex;
  align-items: center;
`;

const BottomImage = styled.Image`
  width: 350px;
  height: 350px;
`;

export default function Login({ navigator }) {
  const navigation = useNavigation()
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
          <TitleLogin>E-mail</TitleLogin>
          <EmailInput
            placeholder="example@gmail.com"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <TitleLogin>Password</TitleLogin>
          <EmailInput
            placeholder="********"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <EnterButton onPress={() => navigation.navigate("Est")}>
            <TextButton >Enter</TextButton>
          </EnterButton>
          <ForgetPassword>Esqueceu a senha?</ForgetPassword>

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
