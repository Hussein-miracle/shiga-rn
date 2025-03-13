import { DarkTheme, DefaultTheme} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View ,Text} from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const fonts = {
  regular:require('@/assets/fonts/ShigaSans-Regular.otf'),
  bold:require('@/assets/fonts/ShigaSans-Bold.otf'),
  medium:require('@/assets/fonts/ShigaSans-Medium.otf'),
}

export default function RootLayout() {
  const [loaded] = useFonts(fonts);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{}}>
        <Stack.Screen name="(core)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar  style="light" backgroundColor={Colors.black} translucent={false} />
    </SafeAreaProvider>
  );
}
