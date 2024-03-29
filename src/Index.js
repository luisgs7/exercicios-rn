import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Primeiro from './components/Primeiro';
import { Comp, Comp1, Comp2 } from "./components/Multi";
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import ParImpar from './components/ParImpar';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado';

export default () => {
  return (
    <SafeAreaView style={style.App}>
        <UsuarioLogado usuario={{nome: "luis", email:"luis@gmail.com"}}/>
        {/* <Primeiro />
        <Familia>
          <Membro nome="Julia" sobrenome="Cerutti"/>
        </Familia>

        <Familia>
          <Membro nome="Eduardo" sobrenome="José"/>
        </Familia>
        <ParImpar />
        <ContadorV2/>
        <Pai />
        <Pai />
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
    </SafeAreaView>
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
