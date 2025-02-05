
import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Button, Card, Paragraph, useTheme, Text, IconButton } from 'react-native-paper';
import { useThemeContext } from '../context/ThemeContext';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

import { getRandomWord } from '../api/queries';
const { width } = Dimensions.get('window');
export default function LearnScreen({ navigation }) {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();
  const theme = useTheme();

  const [randomWord, setRandomWord] = useState(null);

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const word = await getRandomWord();
      setRandomWord(word);
    } catch (error) {
      console.error('Error fetching random word from DB:', error);
    }
  };

  const handleNextWord = () => {
    fetchRandomWord();
  };

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

  
  const gradientColors = isDarkTheme
    ? [theme.colors.elevation.level3, theme.colors.elevation.level1]
    : [theme.colors.primaryContainer, theme.colors.surface];

  
  if (!randomWord) {
    return (
      <LinearGradient colors={gradientColors} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: theme.colors.onSurface }}>Loading random word...</Text>
      </LinearGradient>
    );
  }

  const {
    word,
    meaning,
    root_word,
    synonyms,
    antonyms,
    example,
  } = randomWord;

  const InfoSection = ({ label, content, isItalic = false }) => (
    <Animatable.View
      animation="fadeIn"
      delay={300}
      style={{
        backgroundColor: theme.colors.elevation.level1,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        elevation: 2,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}
    >
      <Text
        style={{
          fontSize: 17,
          fontWeight: '700',
          color: theme.colors.primary,
          marginBottom: 8,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: theme.colors.onSurface,
          fontStyle: isItalic ? 'italic' : 'normal',
          opacity: 0.87,
        }}
      >
        {content}
      </Text>
    </Animatable.View>
  );

  return (
    <LinearGradient colors={gradientColors} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          paddingTop: 30,
        }}
      >
        <Animatable.View
          animation="fadeInUp"
          duration={800}
          style={{
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Card
            style={{
              width: Math.min(450, width * 0.95),
              padding: 24,
              borderRadius: 28,
              backgroundColor: theme.colors.elevation.level1,
              elevation: 8,
              shadowColor: theme.colors.shadow,
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
            }}
          >
            <Animatable.View
              animation="bounceIn"
              duration={1200}
              style={{
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <IconButton
                icon="book-open-variant"
                size={48}
                color={theme.colors.primary}
                style={{
                  backgroundColor: theme.colors.primaryContainer,
                  borderRadius: 24,
                  marginBottom: 16,
                }}
              />

              <Text
                style={{
                  fontSize: 36,
                  fontWeight: '800',
                  color: theme.colors.primary,
                  textAlign: 'center',
                  letterSpacing: 1.5,
                  marginBottom: 8,
                  textTransform: 'uppercase',
                }}
              >
                {word}
              </Text>

              <Paragraph
                style={{
                  fontSize: 18,
                  lineHeight: 28,
                  textAlign: 'center',
                  color: theme.colors.onSurface,
                  opacity: 0.87,
                  marginBottom: 24,
                  paddingHorizontal: 8,
                }}
              >
                {meaning}
              </Paragraph>
            </Animatable.View>

            <InfoSection label="Root Word" content={root_word} />
            <InfoSection label="Synonyms" content={synonyms} />
            <InfoSection label="Antonyms" content={antonyms} />
            <InfoSection label="Example" content={example} isItalic />

            <Animatable.View animation="fadeInUp" delay={400}>
              <Button
                mode="contained"
                onPress={handleNextWord}
                style={{
                  borderRadius: 16,
                  height: 56,
                  marginBottom: 16,
                  elevation: 4,
                }}
                labelStyle={{
                  fontSize: 16,
                  fontWeight: '700',
                  letterSpacing: 0.5,
                }}
                icon="arrow-right"
              >
                Next Random Word
              </Button>

              <Button
                mode="outlined"
                onPress={() => navigation.navigate('Home')}
                style={{
                  borderRadius: 16,
                  height: 56,
                  borderWidth: 2,
                  borderColor: theme.colors.primary,
                }}
                labelStyle={{
                  fontSize: 16,
                  fontWeight: '700',
                  letterSpacing: 0.5,
                }}
                icon="home"
              >
                Back to Home
              </Button>
            </Animatable.View>
          </Card>
        </Animatable.View>
      </ScrollView>
    </LinearGradient>
  );
}
