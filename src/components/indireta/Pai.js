import React, { useState } from "react"
import Filho from "./Filho"
import estilo from "../estilo"
import { Text } from "react-native"

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
       setNum(numero)
       setTexto(texto)
    }

    return (
        <>
            <Text style={estilo.fontG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}