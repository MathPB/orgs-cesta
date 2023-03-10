import { StatusBar, SafeAreaView, View } from "react-native";
import Cesta from "./src/views/cesta";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import mocks from "./src/views/cesta/mocks/cesta";

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mocks} />
    </SafeAreaView>
  );
}
