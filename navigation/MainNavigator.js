import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import LearnScreen from '../screens/LearnScreen';
import ProgressScreen from '../screens/ProgressScreen';

const Stack = createStackNavigator();

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function MainNavigator() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" 
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: 'Home',
              headerTitleAlign: 'left',
            })}
             />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Learn" component={LearnScreen} />
            <Stack.Screen name="Progress" component={ProgressScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}
