/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Header from './components/Header';
import ScoreSection from './components/ScoreSection';
import PlayButton from './components/PlayButton';
import HiLoButtons from './components/HiLoButtons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  state = {
    headerMainText: 'Welcome to the High Low Game',
    headerSubText: 'Select the Start Button to begin',
    gameButtonMainText: 'START',
    show: true,
    hiLoShow: false,
    featureGameNumber: Math.floor(Math.random() * 101),
    previousGameNumber: 0,
    currentGameScore: 0,
    HiScore: 0,
    gameOverColor: '#146605',
  };

  hidePlayButton = () => {
    const show = this.state.show;
    this.setState({show: !show});
  };

  newGameTextSet = () => {
    this.setState({
      headerMainText:
        'From 0 to 100 will the number be Higher or Lower than ' +
        this.state.featureGameNumber,
      previousGameNumber: this.state.featureGameNumber,
      headerSubText: '',
      gameOverColor: '#FF0000',
      gameButtonMainText: 'Try Again',
      currentGameScore: (this.state.currentGameScore = 0),
    });

    const show = this.state.show;
    this.setState({show: !show});
    const hiLoShow = this.state.hiLoShow;
    this.setState({
      hiLoShow: !hiLoShow,
    });
    this.setState({
      featureGameNumber: Math.floor(Math.random() * 101),
      previousGameNumber: this.state.featureGameNumber,
    });
  };

  highWinLoseChecker = () => {
    const featureNumb = this.state.featureGameNumber;

    if (this.state.featureGameNumber > this.state.previousGameNumber) {
      this.setState({
        currentGameScore: this.state.currentGameScore + 1,
        headerMainText:
          'The previous number was ' +
          this.state.previousGameNumber +
          ' the new number is ' +
          featureNumb +
          ' and you guessed Correct',
        headerSubText:
          'Will the next number be Higher or Lower than ' +
          this.state.featureGameNumber +
          '?',
        featureGameNumber: Math.floor(Math.random() * 101),
        previousGameNumber: this.state.featureGameNumber,
      });
    } else if (this.state.featureGameNumber <= this.state.previousGameNumber) {
      this.setState({
        headerMainText:
          'The previous number was ' +
          this.state.previousGameNumber +
          ' the new number is ' +
          featureNumb +
          ' and you guessed Wrong',
        headerSubText: 'Select the Try Again Button to restart and try again',
      });
      const show = this.state.show;
      this.setState({show: !show});
      const hiLoShow = this.state.hiLoShow;
      this.setState({hiLoShow: !hiLoShow});
    }
  };

  lowWinLoseChecker = () => {
    const featureNumb = this.state.featureGameNumber;

    if (this.state.featureGameNumber < this.state.previousGameNumber) {
      this.setState({
        currentGameScore: this.state.currentGameScore + 1,
        headerMainText:
          'The previous number was ' +
          this.state.previousGameNumber +
          ' the new number is ' +
          featureNumb +
          ' and you guessed Correct',
        headerSubText:
          'Will the next number be Higher or Lower than ' +
          this.state.featureGameNumber +
          '?',
        featureGameNumber: Math.floor(Math.random() * 101),
        previousGameNumber: this.state.featureGameNumber,
      });
    } else if (this.state.featureGameNumber > this.state.previousGameNumber) {
      this.setState({
        headerMainText:
          'The previous number was ' +
          this.state.previousGameNumber +
          ' the new number is ' +
          featureNumb +
          ' and you guessed Wrong',
        headerSubText: 'Select the Try Again Button to restart and try again',
      });
      const show = this.state.show;
      this.setState({show: !show});
      const hiLoShow = this.state.hiLoShow;
      this.setState({hiLoShow: !hiLoShow});
    }
  };

  render(): React$Node {
    if (this.state.currentGameScore > this.state.HiScore) {
      this.setState({HiScore: this.state.currentGameScore});
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {
          <SafeAreaView style={styles.SafeAreaView}>
            <Header
              mainText={this.state.headerMainText}
              subText={this.state.headerSubText}
            />
            <ScoreSection
              mainText={'Score: ' + this.state.currentGameScore}
              subText={'HI Score: ' + this.state.HiScore}
            />
            {this.state.show && (
              <PlayButton
                mainAppFunction={this.newGameTextSet}
                mainText={this.state.gameButtonMainText}
                gameOverColor={this.state.gameOverColor}
              />
            )}
            {this.state.hiLoShow && (
              <HiLoButtons
                mainText={'High'}
                subText={'Low'}
                secoundAppFunction={this.highWinLoseChecker}
                thirdAppFunction={this.lowWinLoseChecker}
              />
            )}
          </SafeAreaView>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
