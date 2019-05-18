import React from 'react'
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType='slide'>
            <View style={styles.frame}>
                <View style={styles.container}>
                <Text> Selecione o nível</Text>
                <TouchableOpacity onPress={()=> props.onSelectLevel(0.1)} style={[styles.button , styles.bgEasy]}> 
                    <Text> Fácil </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> props.onSelectLevel(0.2)} style={[styles.button, styles.bgNormal]}>
                    <Text>Intermediário</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.onSelectLevel(0.3)} style={[styles.button, styles.bgHard]}> 
                    <Text>Difícil</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    }
})