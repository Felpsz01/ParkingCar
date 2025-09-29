import { useState, useRef } from "react";
import {
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;

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

const VagasContainer = styled.ScrollView`
  border: 2px solid #fff;
  width: 80%;
  height: 50%;
  margin-bottom: 7%;
  border-radius: 5px;
`;

const DrawerContent = styled.View`
  background-color: #333;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ModalTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const StyledInput = styled(TextInput)`
  background-color: #444;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ModalButton = styled.TouchableOpacity`
  background-color: #06d6a0;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
  align-items: center;
`;

const ModalButtonCancel = styled.TouchableOpacity`
  background-color: #ef476f;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
  align-items: center;
`;

const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const VagaItemContainer = styled.TouchableOpacity`
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

function VagaItem({ nome, onPress }) {
  return (
    <VagaItemContainer onPress={onPress}>
      <VagaItemText>{nome}</VagaItemText>
    </VagaItemContainer>
  );
}

export default function Vagas() {
  const [vagas, setVagas] = useState([
    { id: 1, nome: " 01", placa: "", modelo: "", cor: "" },
    { id: 2, nome: " 02", placa: "", modelo: "", cor: "" },
    { id: 3, nome: " 03", placa: "", modelo: "", cor: "" },
    { id: 4, nome: " 04", placa: "", modelo: "", cor: "" },
    { id: 5, nome: " 05", placa: "", modelo: "", cor: "" },
    { id: 6, nome: " 06", placa: "", modelo: "", cor: "" },
    { id: 7, nome: " 07", placa: "", modelo: "", cor: "" },
    { id: 8, nome: " 08", placa: "", modelo: "", cor: "" },
    { id: 9, nome: " 09", placa: "", modelo: "", cor: "" },
    { id: 10, nome: " 10", placa: "", modelo: "", cor: "" },
    { id: 11, nome: " 11", placa: "", modelo: "", cor: "" },
    { id: 12, nome: " 12", placa: "", modelo: "", cor: "" },
    { id: 13, nome: " 13", placa: "", modelo: "", cor: "" },
    { id: 14, nome: " 14", placa: "", modelo: "", cor: "" },
    { id: 15, nome: " 15", placa: "", modelo: "", cor: "" },
    { id: 16, nome: " 16", placa: "", modelo: "", cor: "" },
    { id: 17, nome: " 17", placa: "", modelo: "", cor: "" },
    { id: 18, nome: " 18", placa: "", modelo: "", cor: "" },
    { id: 19, nome: " 19", placa: "", modelo: "", cor: "" },
    { id: 20, nome: " 20", placa: "", modelo: "", cor: "" },
  ]);

  const [selectedVaga, setSelectedVaga] = useState(null);
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");

  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  const abrirGaveta = (vaga) => {
    setSelectedVaga(vaga);
    setPlaca(vaga.placa || "");
    setModelo(vaga.modelo || "");
    setCor(vaga.cor || "");

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fecharGaveta = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSelectedVaga(null));
  };

  const salvarDados = () => {
    if (!selectedVaga) return;

    const novasVagas = vagas.map((vaga) =>
      vaga.id === selectedVaga.id ? { ...vaga, placa, modelo, cor } : vaga
    );

    setVagas(novasVagas);
    fecharGaveta();
  };

  const removerVeiculo = () => {
    if (!selectedVaga) return;

    // Confirmação de remoção
    Alert.alert(
      "Remover Veículo",
      "Tem certeza que deseja remover o veículo dessa vaga?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          onPress: () => {
            const novasVagas = vagas.map((vaga) =>
              vaga.id === selectedVaga.id
                ? { ...vaga, placa: "", modelo: "", cor: "" }
                : vaga
            );

            setVagas(novasVagas);
            fecharGaveta();
          },
        },
      ]
    );
  };

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
          <VagaItem
            key={vaga.id}
            nome={
              vaga.placa
                ? `${vaga.nome} - ${vaga.modelo} (${vaga.cor})`
                : vaga.nome
            }
            onPress={() => abrirGaveta(vaga)}
          />
        ))}
      </VagasContainer>

      {selectedVaga && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <DrawerContent>
            <ModalTitle>Editar {selectedVaga.nome}</ModalTitle>

            <StyledInput
              placeholder="Placa"
              placeholderTextColor="#aaa"
              value={placa}
              onChangeText={setPlaca}
            />
            <StyledInput
              placeholder="Modelo"
              placeholderTextColor="#aaa"
              value={modelo}
              onChangeText={setModelo}
            />
            <StyledInput
              placeholder="Cor"
              placeholderTextColor="#aaa"
              value={cor}
              onChangeText={setCor}
            />

            <ModalButton onPress={salvarDados}>
              <ModalButtonText>Salvar</ModalButtonText>
            </ModalButton>

            <ModalButtonCancel onPress={fecharGaveta}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButtonCancel>

            <ModalButtonCancel onPress={removerVeiculo}>
              <ModalButtonText>Remover Veículo</ModalButtonText>
            </ModalButtonCancel>
          </DrawerContent>
        </Animated.View>
      )}
    </ContainerApp>
  );
}
