import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Primeiro from './components/Primeiro';
import { Comp, Comp1, Comp2 } from "./components/Multi";
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default () => {
  return (
    <View style={style.App}>
        <Primeiro />
        <Comp />
        <Comp1 />
        <Comp2 />
        <MinMax min={3} max={20}/>
        <Aleatorio min={10} max={15}/>
    </View>
  )
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})
