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
import ListaProdutoV2 from './components/produtos/ListaProdutoV2';
import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/layout/Quadrado';
import FlexBoxV1 from './components/layout/FlexBoxV1';
import FlexBoxV2 from './components/layout/FlexBoxV2';
import FlexBoxV3 from './components/layout/FlexBoxV3';
import FlexBoxV4 from './components/layout/FlexBoxV4';
import Mega from './components/mega/Mega';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtdNumeros={5}/>
        {/* <Primeiro />
        <FlexBoxV4 />
        <FlexBoxV3 />
        <FlexBoxV1/>
      <DigiteSeuNome/>
        <ListaProdutoV2 />
        <UsuarioLogado usuario={{nome: "luis", email:"luis@gmail.com"}}/>
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
    padding: 10,
  },
})
