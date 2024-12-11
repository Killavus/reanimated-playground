/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useScrollViewOffset,
  withSpring,
} from 'react-native-reanimated';
import {LoremIpsum} from './LoremIpsum';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <Button
        onPress={useCallback(() => setVisible(value => !value), [])}
        title="Toggle"
      />
      {visible ? (
        <Animated.View
          entering={FadeInUp.duration(500)}
          exiting={FadeOutDown.duration(2000)}
          style={styles.box}
        />
      ) : null}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  box: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: 'red',
    alignSelf: 'center',
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
