import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default (props) => {
    const { mined, opened, exploded, flagged } = props

    const nearMines = props.nearMines

    const styleField = [styles.field]

    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged, styles.regular)
    if (!opened && !exploded)
        styleField.push(styles.regular)
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2a228d7'
        else if (nearMines == 2) color = '#2b520f'
        else if (nearMines > 2 && nearMines < 6) color = '#f9060a'
        else if (nearMines >= 6) color = '#f2211a9'
    }

    return (
        <TouchableWithoutFeedback onPress = {props.onOpen}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>{nearMines}
                    </Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}

            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,

    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    flagged: {

    }
})