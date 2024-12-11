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
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useFrameCallback,
  useScrollViewOffset,
  useSharedValue,
  withClamp,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {LoremIpsum} from './LoremIpsum';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();

  const scrollViewOffset = useScrollViewOffset(scrollViewRef);

  const {height: deviceHeight} = useWindowDimensions();

  const scrollAnimProgress = useDerivedValue(() => {
    return withSpring(interpolate(scrollViewOffset.value, [0, 200], [0, 1]));
  }, []);

  const headerAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollAnimProgress.value,
        [0, 1],
        [deviceHeight * 0.2, 50],
        'clamp',
      ),
      backgroundColor: interpolateColor(
        scrollAnimProgress.value,
        [0, 1],
        ['black', 'darkred'],
      ),
    };
  });

  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Animated.View style={[styles.header, headerAnimation]}>
        <Text style={[styles.headerText]}>Header Text</Text>
      </Animated.View>
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.main}>
        <LoremIpsum />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: '20%',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
