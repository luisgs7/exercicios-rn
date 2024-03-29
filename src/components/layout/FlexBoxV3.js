import React from "react"
import { View, StyleSheet } from "react-native"

import Quadrado from "./Quadrado"

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#000' lado={20}/>
            <Quadrado cor='#900' lado={30}/>
            <Quadrado cor='#090' lado={40}/>
            <Quadrado cor='#009' lado={50}/>
            <Quadrado cor='#986' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: 'yellow',
    }
})