import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';
import { Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [assets] = useAssets([require('./assets/snack-icon.png')]);
  const [loaded] = Font.useFonts(Ionicons.font);

  const onLayoutRootView = useCallback(async () => {
    if (assets && loaded) {
      await SplashScreen.hideAsync();
    }
  }, [assets, loaded]);

  return assets || loaded ? (
    <View onLayout={onLayoutRootView}>
      <Text>we are down loading !</Text>
    </View>
  ) : null;
}