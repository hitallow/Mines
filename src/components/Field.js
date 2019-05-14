import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import params from '../params'

export default (props) => {
    const { mined, opened, nearMines } = props

    const styleField = [styles.field]

    if (opened) styleField.push(styles.opened)

    if (styleField.length === 1)
        styleField.push(styles.regular)
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2a228d7'
        else if (nearMines == 2) color = '#2b520f'
        else if (nearMines > 2 && nearMines < 6) color = '#f9060a'
        else if (nearMines >= 6) color = '#f2211a9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, { color: color }]}>{nearMines}
                </Text> : false}

        </View>
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
        borderLefColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened : {
        backgroundColor: '#999',
        borderColor : '#777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight : 'bold',
        fontSize: params.fontSize,
        
    }
})