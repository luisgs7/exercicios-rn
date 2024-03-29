import React from "react"
import { View, StyleSheet } from "react-native"

import Quadrado from "./Quadrado"

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#000'/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#986'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'yellow',
    }
})