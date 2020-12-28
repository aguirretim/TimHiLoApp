/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import type {Node} from 'react';
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

/*
converted header function to class instead of function
const PlayButton = (props, state) => {
  return ()}

  so that you can use states to dynaimicly change the data.
  */

/*
old way to write state new way used only can be done with babel

constructor() {
    super();
    this.state = {
      mainText: 'Welcome to the High Low Game',
      subText: 'Select the Start Button to begin',
    };
  }*/

class Header extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.mainText}>{this.props.mainText}</Text>
        <Text style={styles.subText}>{this.props.subText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  background: {
    height: 370,
    paddingTop: 5,

    paddingHorizontal: 32,
    backgroundColor: '#146605',
    borderColor: '#62829C',
    borderBottomColor: '#0070ff',
  },
});

export default Header;
