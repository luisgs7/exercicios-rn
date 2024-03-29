import React, { useState } from "react"
import { View, TextInput, Text } from "react-native"

import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('José...')
    return (
        <View>
            <Text style={Estilo.fontG}>{nome}</Text>
            <TextInput
                placeholder="Digite seu Nome..."
                value={nome}
                style={Estilo.fontG}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}