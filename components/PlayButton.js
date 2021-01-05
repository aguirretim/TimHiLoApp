import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

/*
 arrowfunction =() => {code here} vs regfunction(){code here}

 arrow functions can use the global this variable in the function refrence.

 regular function this is only local to the actual function.

 */

class PlayButton extends React.Component {
  state = {};

  render() {
    return (
      <TouchableOpacity
        style={styles.background}
        onPress={() => {
          this.props.mainAppFunction();
        }}>
        <Text style={styles.PlayButton}>{this.props.mainText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  PlayButton: {
    fontSize: 70,
    color: '#146605',
    textAlign: 'center',
  },
  subText: {
    color: '#ffffff',
    fontSize: 18,
  },
  background: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: '#62829C',
    borderBottomColor: '#0070ff',
    justifyContent: 'center',
  },
});

export default PlayButton;
