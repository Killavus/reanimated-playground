/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {Button, SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import LottieView from 'lottie-react-native';

import successLottie from './success.json';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedLottie = Animated.createAnimatedComponent(LottieView);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const animationProgress = useSharedValue(0.25);

  const onSuccess = useCallback(() => {
    animationProgress.value = 1;
  }, [animationProgress]);

  const lottieProps = useAnimatedProps(() => {
    return {
      progress: withSequence(
        withTiming(animationProgress.value, {
          duration: 2000,
          easing: Easing.cubic,
        }),
        withTiming(0.25, {duration: 0}, () => {
          animationProgress.value = 0.25;
        }),
      ),
    };
  }, []);

  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <Button onPress={onSuccess} title="Success!" />
      <ReanimatedLottie
        style={styles.successAnimation}
        source={successLottie}
        animatedProps={lottieProps}
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
