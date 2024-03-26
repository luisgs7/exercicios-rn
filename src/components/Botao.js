import React from 'react'
import { Button } from 'react-native'


export default props => {
    function executar() {
        console.warn('Exec #01!!! ', props)
    }

    return(
        <>
        <Button
            title="Executar #01!"
            onPress={executar}
        />

        <Button
            title="Executar #02!"
            onPress={function () {
                console.warn('Exec #02')
            }}
        />

        <Button
            title="Executar #03!"
            onPress={_ => console.warn('Exec #03')
            }
        />
        </>
    )
}