import MainNavigator from './navigation/MainNavigator';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';

const lightTheme = {
  dark: false,
  colors: {
    primary: '#4CAF50',
    background: '#FFFFFF',
    text: '#000000',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#90CAF9',
    background: '#121212',
    text: '#FFFFFF',
  },
};

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <MainNavigator />
    </PaperProvider>
  );
}
