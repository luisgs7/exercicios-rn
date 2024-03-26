import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Primeiro from './components/Primeiro';
import { Comp, Comp1, Comp2 } from "./components/Multi";
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/direta/Pai';

export default () => {
  return (
    <View style={style.App}>
        <Pai />
        {/* <Primeiro />
        <Contador inicial={100} passo={10} />
        <Contador/>
        <Botao />
        <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro do Produto "
        />
        <Comp />
        <Comp1 />
        <Comp2 />
        <MinMax min={3} max={20}/>
        <Aleatorio min={10} max={15}/> */}
    </View>
  )
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})
