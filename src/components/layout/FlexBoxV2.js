import React from "react"
import { View, StyleSheet } from "react-native"

import Quadrado from "./Quadrado"

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#000'/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#986'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'yellow',
    }
})