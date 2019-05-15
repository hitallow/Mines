

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Testando </Text>
        <Text style={styles.instructions}>{params.getColumnsAmout()}x{params.getRowsAmount()}</Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={5}/>
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field  opened/>
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
