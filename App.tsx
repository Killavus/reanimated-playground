/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import LottieView from 'lottie-react-native';

import successLottie from './success.json';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <LottieView
        style={styles.successAnimation}
        source={successLottie}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successAnimation: {
    width: 200,
    height: 200,
  },
});
