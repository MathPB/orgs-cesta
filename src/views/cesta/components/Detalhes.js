import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../components/Texto";
import logo from "../../../../assets/logo.png";

export default function Detalhes({ nomeCesta, nomeFazenda, descricao, preco }) {
  return (
    <>
      <Texto style={estilos.nomeCesta}>{nomeCesta}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.logoFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  nomeCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold",
  },
  logoFazenda: {
    width: 32,
    height: 32,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
