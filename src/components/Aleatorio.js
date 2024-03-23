import React from "react"
import { Text } from "react-native"
import Estilo from "./estilo"

export default props => {
    console.warn(props)
    const {min, max} = props
    const value = parseInt(Math.floor(Math.random() * (max - min) + props.min))
    return (
        <Text style={Estilo.fontG}>VALOR Aleatorio {value}</Text>
    )
}