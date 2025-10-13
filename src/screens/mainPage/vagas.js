import axios from "axios";
import { useState, useRef } from "react";
import { StatusBar, TextInput, Animated, Dimensions, Alert, View, } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native";

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
  margin-top: -10px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const VagasContainer = styled.ScrollView`
  border: 2px solid #fff;
  width: 80%;
  height: 50%;
  margin-bottom: 9%;
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
  border-bottom-width: 2px;
  border-top-width: 2px;
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

function VagaItem({ numVaga, onPress }) {
  return (
    <VagaItemContainer onPress={onPress}>
      <VagaItemText>{numVaga}</VagaItemText>
    </VagaItemContainer>
  );
}

export default function Vagas({ navigation }) {
  const [vagas, setVagas] = useState([
    {
      id: 1,numVaga: " 01",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 2,numVaga: " 02",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 3,numVaga: " 03",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 4,numVaga: " 04",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 5,numVaga: " 05",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 6,numVaga: " 06",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 7,numVaga: " 07",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 8,numVaga: " 08",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 9,numVaga: " 09",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 10,numVaga: " 10",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    { 
      id: 11,numVaga: " 11",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    { 
      id: 12,numVaga: " 12",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 13,numVaga: " 13",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 14,numVaga: " 14",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 15,numVaga: " 15",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 16,numVaga: " 16",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 17,numVaga: " 17",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 18,numVaga: " 18",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 19,numVaga: " 19",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
    {
      id: 20,numVaga: " 20",placa: "",modelo: "",cor: "",entrada: null,saida: null,valorPago: null,
    },
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

    const agora = new Date();

    const novasVagas = vagas.map((vaga) =>
      vaga.id === selectedVaga.id
        ? {
            ...vaga,
            placa,
            modelo,
            cor,
            entrada: vaga.entrada || agora.toISOString(),
            saida: null,
            valorPago: null,
          }
        : vaga
    );

    setVagas(novasVagas);
    fecharGaveta();
  };
  const [historico, setHistorico] = useState([]);
  const removerVeiculo = () => {
    if (!selectedVaga) return;

    Alert.alert(
      "Remover Veículo",
      "Tem certeza que deseja remover o veículo dessa vaga?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          onPress: () => {
            const agora = new Date();

            const novasVagas = vagas.map((vaga) => {
              if (vaga.id === selectedVaga.id) {
                const entrada = vaga.entrada ? new Date(vaga.entrada) : null;
                const diffMs = entrada ? agora - entrada : 0;
                const diffHoras = Math.ceil(diffMs / (1000 * 60 * 60));
                const valor = diffHoras * 10;

                const registro = {
                  ...vaga,
                  saida: agora.toISOString(),
                  valorPago: valor,
                };

                // Adiciona ao histórico
                setHistorico((prevHistorico) => [...prevHistorico, registro]);

                // Retorna vaga "vazia"
                return {
                  ...vaga,
                  placa: "",
                  modelo: "",
                  cor: "",
                  entrada: null,
                  saida: null,
                  valorPago: null,
                };
              }
              return vaga;
            });

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
            numVaga={
              vaga.placa
                ? `${vaga.numVaga} - ${vaga.modelo} (${vaga.cor})`
                : vaga.numVaga
            }
            onPress={() => abrirGaveta(vaga)}
          />
        ))}
      </VagasContainer>
      <View style={{ marginBottom: 30 }}>
        <Button
         title="Ver Histórico"
         onPress={() => navigation.navigate("Historico")}
        />
      </View>

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
            {selectedVaga.entrada && (
              <StyledInput
                editable={false}
                value={`Entrada: ${new Date(
                  selectedVaga.entrada
                ).toLocaleString()}`}
              />
            )}

            {selectedVaga.saida && (
              <>
                <StyledInput
                  editable={false}
                  value={`Saída: ${new Date(
                    selectedVaga.saida
                  ).toLocaleString()}`}
                />
                <StyledInput
                  editable={false}
                  value={`Valor Pago: R$ ${selectedVaga.valorPago.toFixed(2)}`}
                />
              </>
            )}

            {/* // selectedVaga != null ? condicao1 : condicao2  */}

            <ModalButton onPress={salvarDados}>
              <ModalButtonText>Salvar</ModalButtonText>
            </ModalButton>

            <ModalButtonCancel onPress={removerVeiculo}>
              <ModalButtonText>Remover Veículo</ModalButtonText>
            </ModalButtonCancel>

            <ModalButtonCancel onPress={fecharGaveta}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButtonCancel>
          </DrawerContent>
        </Animated.View>
      )}
    </ContainerApp>
  );
}
