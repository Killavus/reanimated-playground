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
import Animated, {useSharedValue} from 'react-native-reanimated';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const {width: deviceWidth} = useWindowDimensions();

  const widthValue = useSharedValue(100);

  const onIncrease = useCallback(() => {
    widthValue.value = Math.min(widthValue.value + 20, deviceWidth);
  }, [widthValue, deviceWidth]);

  const onDecrease = useCallback(() => {
    widthValue.value = Math.max(100, widthValue.value - 20);
  }, [widthValue]);

  return (
    <SafeAreaView style={[backgroundStyle, styles.root]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.main}>
        <Animated.View style={[styles.box, {width: widthValue}]} />
        <Button title="Increase" onPress={onIncrease} />
        <Button title="Decrease" onPress={onDecrease} />
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
  },
  box: {
    height: 100,
    borderRadius: 12,
    backgroundColor: 'fuchsia',
    margin: 12,
  },
});
