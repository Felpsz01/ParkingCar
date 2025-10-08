import { Pressable, TextInput, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Text } from "react-native";

export default function Cep() {
    const [cep, setCep] = useState("");
    const [data, setData] = useState(null);
    function buscarCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log("Erro:",err);
        })
    } 
  return (
    <View>
      <TextInput
        placeholder="Digite seu CEP"
        keyboardType="numeric"
        onChangeText={setCep}
        value={cep}
      />
      <Pressable onPress={buscarCep}>
        <Text>Buscar</Text>
      </Pressable>
      {
        data && <Text>{data.logradouro  }</Text>
      }
    </View>
  );
}
