import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

const VagaItemContainer = styled.View`
  background-color: #1d1d1d;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  width: 100%;
  height: 50px;
  justify-content: center;
  padding-left: 16px;
`;

const VagaItemText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

function VagaItem({ nome }) {
  return (
    <VagaItemContainer>
      <VagaItemText>{nome}</VagaItemText>
    </VagaItemContainer>
  );
}

export default function Vagas() {
  const ContainerApp = styled.SafeAreaView`
    flex: 1;
    background-color: #2d2d2d;
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

  const VagasTitle = styled.Text`
    color: white;
    font-size: 20px;
    margin-top: -30px;
    margin-bottom: 10px;
    font-weight: bold;
  `;

  const VagasContainer = styled.View`
    border: 2px solid #fff;
    width: 90%;
    height: 65%;
    border-radius: 5px;
    display: flex;
  `;

  const vagas = [
    { id: 1, nome: "Vaga 1" },
    { id: 2, nome: "Vaga 2" },
    { id: 3, nome: "Vaga 3" },
  ];

  return (
    <ContainerApp>
      <StatusBar hidden />
      <ViewLogoImage>
        <LogoImage
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </ViewLogoImage>
      <VagasTitle>Vagas</VagasTitle>
      <VagasContainer>
        {vagas.map((vaga) => (
          <VagaItem key={vaga.id} nome={vaga.nome} />
        ))}
      </VagasContainer>
    </ContainerApp>
  );
}
