

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'


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
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Testando </Text>
        <Text style={styles.instructions}>{params.getColumnsAmout()}x{params.getRowsAmount()}</Text>
        <View>
          <MineField board={this.state.board} />
        </View>

        {/*        <Field/>
        <Field opened/>*
        <Field opened nearMines={5}/>
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field  opened/>
        <Field flagged bigger/>
        <Flag bigger/>*/}


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
