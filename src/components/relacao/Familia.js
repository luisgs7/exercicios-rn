import React from "react"
import Membro from "./Membro"
import { Text } from "react-native"

export default props => {
    return (
        <>
            <Text>Início...</Text>
            {props.children}
            <Text>Fim.</Text>
        </>
    )
}