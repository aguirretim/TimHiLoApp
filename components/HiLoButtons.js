import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HiLoButtons = (props) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={styles.background}
        onPress={() => {
          props.secoundAppFunction();
        }}>
        <Text style={styles.mainText}>{props.mainText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.background}
        onPress={() => {
          props.thirdAppFunction();
        }}>
        <Text style={styles.subText}>{props.subText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 116,
    color: '#146605',
    textAlign: 'center',
  },
  subText: {
    fontSize: 116,
    color: '#146605',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: '#62829C',
    borderBottomColor: '#0070ff',
    justifyContent: 'center',
  },
});

export default HiLoButtons;
