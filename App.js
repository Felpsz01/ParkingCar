import { SafeAreaView } from "react-native-safe-area-context";
import Cadastro from "./src/screens/cadastro/telaCadastro";
import Login from "./src/screens/login/telaLogin";
import Vagas from "./src/screens/mainPage/vagas";
import Cep from "./src/screens/login/index"
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Cad',
  screenOptions: { headerShown: false },
  screens: {
    Log: Login,
    Cad: Cadastro,
    Est: Vagas,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden></StatusBar>
      <Navigation />
    </SafeAreaView>
  );
}
