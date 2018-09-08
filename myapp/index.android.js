/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Demo01Component from './app/component/demo01_first.js';
import Demo02Component from './app/component/demo02_view.js';
import Demo03Component from './app/component/demo03_stylesheet.js';
import Demo04Component from './app/component/demo04_img.js';
import Demo05Component from './app/component/demo05_lianxi.js';
import Demo06Component from './app/component/demo06_button.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Demo01Component></Demo01Component>
        <Demo02Component></Demo02Component>
        <Demo03Component></Demo03Component>
        <Demo04Component></Demo04Component>
        <Demo05Component></Demo05Component>
        <Demo06Component></Demo06Component>
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

AppRegistry.registerComponent('myapp', () => myapp);
