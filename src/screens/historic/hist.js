import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #2d2d2d;
  padding: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Item = styled.View`
  background-color: #444;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ItemText = styled.Text`
  color: white;
`;

export default function Historico({ route }) {
  const { historico } = route.params;

  return (
    <Container>
      <Title>Histórico de Veículos</Title>
      <ScrollView>
        {historico.map((item, index) => (
          <Item key={index}>
            <ItemText>Vaga: {item.numVaga}</ItemText>
            <ItemText>Placa: {item.placa}</ItemText>
            <ItemText>Modelo: {item.modelo}</ItemText>
            <ItemText>Cor: {item.cor}</ItemText>
            <ItemText>
              Entrada: {new Date(item.entrada).toLocaleString()}
            </ItemText>
            <ItemText>Saída: {new Date(item.saida).toLocaleString()}</ItemText>
            <ItemText>Valor Pago: R$ {item.valorPago.toFixed(2)}</ItemText>
          </Item>
        ))}
      </ScrollView>
    </Container>
  );
}
