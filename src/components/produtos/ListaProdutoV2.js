import React from "react"
import Estilo from '../estilo'

import produtos from "./produtos"
import { FlatList, Text } from "react-native"

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text style={Estilo.fontG}>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={Estilo.fontG}>Lista de Produtos V2</Text>

            <FlatList 
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={produtoRender}
            />
        </>
    )
}