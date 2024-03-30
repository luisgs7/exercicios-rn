import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Estilo from '../estilo'


export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.fontG, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },
    Num: {
        color: '#FFF'
    }
})