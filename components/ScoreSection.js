import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScoreSection = (props) => {
  return (
    <View style={styles.background}>
      <Text style={styles.mainText}>{props.mainText}</Text>
      <Text style={styles.subText}>{props.subText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subText: {
    color: '#ffffff',
    fontSize: 18,
  },
  background: {
    height: 30,
    paddingBottom: 5,
    paddingHorizontal: 32,
    backgroundColor: '#345633',
    borderColor: '#62829C',
    borderBottomColor: '#0070ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ScoreSection;
