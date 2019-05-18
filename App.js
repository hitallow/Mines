

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard, cloneBoard, wonGame, openField, hasExplosion, showMines } from './src/functions'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmout()

    return Math.ceil(cols * rows * params.dificultLevel)

  }


  createState = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmout()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = wonGame(board)
    if(lost){
      showMines(board)
      Alert.alert("Você perdeu","Você é muito burro")
    }
    if(won){
      Alert.alert("Você ganhou","Parabêns")
    }
    // usando chave valor igual
    this.setState({ board , lost, won})
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Testando </Text>
        <Text style={styles.instructions}>{params.getColumnsAmout()}x{params.getRowsAmount()}</Text>
        <View>
          <MineField board={this.state.board} onOpenField={this.onOpenField} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
