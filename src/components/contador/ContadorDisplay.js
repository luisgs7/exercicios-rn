import React from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"

import Estilo from '../estilo'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.fontG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#fff'
    }
})