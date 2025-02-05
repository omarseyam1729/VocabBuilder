import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Card, Title, Paragraph, IconButton, useTheme } from 'react-native-paper';
import { useThemeContext } from '../context/ThemeContext';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();
  const theme = useTheme();

  const gradientColors = isDarkTheme 
    ? [theme.colors.elevation.level3, theme.colors.elevation.level1]
    : [theme.colors.primaryContainer, theme.colors.surface];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Animatable.View animation="rotate" duration={1000}>
          <IconButton
            icon={isDarkTheme ? 'weather-sunny' : 'weather-night'}
            size={28}
            onPress={() => setIsDarkTheme(!isDarkTheme)}
            iconColor={theme.colors.primary}
            style={{ marginRight: 10 }}
          />
        </Animatable.View>
      ),
    });
  }, [navigation, isDarkTheme, theme]);

  const buttonBaseStyle = {
    borderRadius: 16,
    height: 64,
    marginBottom: 23,
    elevation: 2,
  };

  const buttonLabelStyle = {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    paddingVertical: 8,
  };

  return (
    <LinearGradient
      colors={gradientColors}
      style={{
        flex: 1,
        paddingTop: 20,
      }}
    >
      <Animatable.View
        animation="fadeInUp"
        duration={800}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Card
          style={{
            width: Math.min(400, width * 0.9),
            padding: 28,
            borderRadius: 28,
            backgroundColor: theme.colors.elevation.level1,
            elevation: 8,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          }}
        >
          <Animatable.View
            animation="bounceIn"
            duration={1500}
            style={{ alignItems: 'center', marginBottom: 24 }}
          >
            <IconButton
              icon="book-education"
              size={56}
              color={theme.colors.primary}
              style={{
                backgroundColor: theme.colors.primaryContainer,
                borderRadius: 28,
              }}
            />
          </Animatable.View>

          <Animatable.View animation="fadeIn" delay={200}>
            <Title
              style={{
                fontSize: 28,
                fontWeight: '800',
                textAlign: 'center',
                color: theme.colors.primary,
                marginBottom: 12,
                letterSpacing: 1,
              }}
            >
              Vocab Builder
            </Title>

            <Paragraph
              style={{
                textAlign: 'center',
                color: theme.colors.onSurfaceVariant,
                marginBottom: 32,
                lineHeight: 24,
                fontSize: 16,
                opacity: 0.9,
              }}
            >
              Enhance your vocabulary through interactive learning and engaging exercises
            </Paragraph>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" delay={400}>
            <Button
              mode="contained"
              style={{
                ...buttonBaseStyle,
                backgroundColor: theme.colors.primary,
              }}
              labelStyle={{
                ...buttonLabelStyle,
                color: theme.colors.onPrimary,
              }}
              icon="book-open-page-variant"
              onPress={() => navigation.navigate('Learn')}
            >
              Start Learning
            </Button>

            <Button
              mode="contained-tonal"
              style={{
                ...buttonBaseStyle,
                backgroundColor: theme.colors.secondaryContainer,
              }}
              labelStyle={{
                ...buttonLabelStyle,
                color: theme.colors.onSecondaryContainer,
              }}
              icon="clock-fast"
              onPress={() => navigation.navigate('Quiz')}
            >
              Quick Quiz
            </Button>

            <Button
              mode="outlined"
              style={{
                ...buttonBaseStyle,
                borderWidth: 2,
                borderColor: theme.colors.primary,
              }}
              labelStyle={{
                ...buttonLabelStyle,
                color: theme.colors.primary,
              }}
              icon="chart-areaspline"
              onPress={() => navigation.navigate('Progress')}
            >
              My Progress
            </Button>
          </Animatable.View>
        </Card>
      </Animatable.View>
    </LinearGradient>
  );
}