import React from 'react';
import { View } from 'react-native';
import { Button, Card, Title, Paragraph, IconButton, useTheme } from 'react-native-paper';
import { useThemeContext } from '../navigation/MainNavigator';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen({ navigation }) {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();
  const theme = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isDarkTheme ? 'weather-sunny' : 'weather-night'}
          size={24}
          onPress={() => setIsDarkTheme(!isDarkTheme)}
          iconColor={theme.colors.primary}
          style={{ marginRight: 10 }}
        />
      )
    });
  }, [navigation, isDarkTheme, theme]);

  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      backgroundColor: theme.colors.background
    }}>
      <Animatable.View 
        animation="fadeInUp"
        duration={600}
        style={{ width: '100%', alignItems: 'center' }}
      >
        <Card style={{
          width: '85%',
          padding: 25,
          borderRadius: 25,
          backgroundColor: theme.colors.surface,
          elevation: 6
        }}>
          <Animatable.View 
            animation="pulse" 
            easing="ease-out" 
            iterationCount="infinite"
            style={{ alignItems: 'center', marginBottom: 20 }}
          >
            <IconButton
              icon="book-education"
              size={45}
              color={theme.colors.primary}
            />
          </Animatable.View>

          <Title style={{
            fontSize: 22,
            fontWeight: '800',
            textAlign: 'center',
            color: theme.colors.primary,
            marginBottom: 15,
            letterSpacing: 0.8
          }}>
            Vocab Builder
          </Title>

          <Paragraph style={{
            textAlign: 'center',
            color: theme.colors.onSurfaceVariant,
            marginBottom: 25,
            lineHeight: 22,
            fontSize: 15
          }}>
            Enhance your vocabulary through interactive learning
          </Paragraph>

          <Animatable.View animation="fadeIn" delay={400} style={{ width: '100%' }}>
            <Button
              mode="contained-tonal"
              style={{
                borderRadius: 12,
                height: 48,
                marginBottom: 12
              }}
              labelStyle={{
                fontSize: 15,
                fontWeight: '600',
                letterSpacing: 0.5
              }}
              icon="book-open-page-variant"
              onPress={() => navigation.navigate('Learn')}
            >
              Start Learning
            </Button>
          </Animatable.View>

          <Animatable.View animation="fadeIn" delay={500} style={{ width: '100%' }}>
            <Button
              mode="outlined"
              style={{
                borderRadius: 12,
                height: 48,
                marginBottom: 12,
                borderWidth: 1.5
              }}
              labelStyle={{
                fontSize: 15,
                fontWeight: '600',
                letterSpacing: 0.5
              }}
              icon="clock-fast"
              onPress={() => navigation.navigate('Quiz')}
            >
              Quick Quiz
            </Button>
          </Animatable.View>

          <Animatable.View animation="fadeIn" delay={600} style={{ width: '100%' }}>
            <Button
              mode="elevated"
              style={{
                borderRadius: 12,
                height: 48,
                backgroundColor: theme.colors.secondaryContainer
              }}
              labelStyle={{
                fontSize: 15,
                fontWeight: '600',
                letterSpacing: 0.5,
                color: theme.colors.onSecondaryContainer
              }}
              icon="chart-areaspline"
              onPress={() => navigation.navigate('Progress')}
            >
              My Progress
            </Button>
          </Animatable.View>
        </Card>
      </Animatable.View>
    </View>
  );
}