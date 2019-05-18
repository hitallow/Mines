

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import { createMinedBoard, cloneBoard, wonGame, openField, hasExplosion, showMines, invertFlag, flagUsed } from './src/functions'


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
    if (lost) {
      showMines(board)
      Alert.alert("Você perdeu", "Você é muito burro")
    }
    if (won) {
      Alert.alert("Você ganhou", "Parabêns")
    }
    // usando chave valor igual
    this.setState({ board, lost, won })
  }
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)

    invertFlag(board, row, column)

    const won = wonGame(board)

    if (won) {
      Alert.alert("Parabêns", "Você venceu o jogo")
    }
    this.setState({
      board, won
    })

  }
  restartGame = () => {
    this.setState({ ...this.createState() })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header newGame={() => this.restartGame()} flagsLeft={this.minesAmount() - flagUsed(this.state.board)} />
        <View>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})