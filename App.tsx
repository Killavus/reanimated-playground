/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  withClamp,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const dotOne = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(withSequence(withTiming(1), withTiming(0.66)), 0),
    };
  });

  const dotTwo = useAnimatedStyle(() => {
    return {
      opacity: withDelay(
        150,
        withRepeat(withSequence(withTiming(1), withTiming(0.66)), 0),
      ),
    };
  });

  const dotThree = useAnimatedStyle(() => {
    return {
      opacity: withDelay(
        300,
        withRepeat(withSequence(withTiming(1), withTiming(0.66)), 0),
      ),
    };
  });

  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.main}>
        <View style={styles.dotBox}>
          <Animated.View style={[styles.dot, dotOne]} />
          <Animated.View style={[styles.dot, dotTwo]} />
          <Animated.View style={[styles.dot, dotThree]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: 100,
    borderRadius: 12,
    backgroundColor: 'fuchsia',
    margin: 12,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  dotBox: {
    flexDirection: 'row',
    gap: 10,
  },
});
