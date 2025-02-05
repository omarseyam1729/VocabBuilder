import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Card, Title, Text, useTheme, TouchableRipple } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function QuizScreen({ navigation }) {
  const theme = useTheme();
  const [questions, setQuestions] = useState([
    {
      word: 'abbreviate',
      options: [
        '1. To make something more elaborate or detailed',
        '2. To expand a shortened version of a word or phrase to its full form',
        '3. To create a new word by combining the initials or key letters of several words',
        '4. To increase in physical size or volume',
      ],
      correct: '3. To create a new word by combining the initials or key letters of several words',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const gradientColors = [theme.colors.primaryContainer, theme.colors.surface];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);

    if (option === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1000); // Reduced feedback time from 1500ms to 1000ms
  };

  const getOptionStyle = (option) => {
    if (!showFeedback || selectedOption !== option) {
      return {};
    }
    
    const isCorrect = option === questions[currentQuestion].correct;
    return {
      backgroundColor: isCorrect ? theme.colors.primaryContainer : theme.colors.errorContainer,
    };
  };

  const ScoreCard = () => (
    <Card
      style={{
        width: Math.min(400, width * 0.9),
        padding: 28,
        borderRadius: 28,
        backgroundColor: theme.colors.elevation.level1,
        elevation: 8,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Title
          style={{
            fontSize: 32,
            fontWeight: '800',
            color: theme.colors.primary,
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Quiz Complete!
        </Title>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: theme.colors.secondary,
            marginBottom: 32,
          }}
        >
          Your Score: {score}/{questions.length}
        </Text>
        
        <View style={{ width: '100%' }}>
          <Button
            mode="contained"
            onPress={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
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
            icon="refresh"
          >
            Try Again
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
        </View>
      </View>
    </Card>
  );

  const QuizCard = () => (
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
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.primary,
            fontWeight: '600',
            marginBottom: 8,
          }}
        >
          Question {currentQuestion + 1} of {questions.length}
        </Text>
        <Title
          style={{
            fontSize: 32,
            fontWeight: '800',
            color: theme.colors.primary,
            textAlign: 'center',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          {questions[currentQuestion].word}
        </Title>
      </View>

      <View>
        {questions[currentQuestion].options.map((option) => (
          <TouchableRipple
            key={option}
            onPress={() => !showFeedback && handleAnswer(option)}
            style={{
              marginBottom: 16,
              borderRadius: 16,
              overflow: 'hidden',
              elevation: 2,
              backgroundColor: theme.colors.surface,
              ...getOptionStyle(option),
            }}
          >
            <View
              style={{
                padding: 20,
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  color: theme.colors.onSurface,
                  fontWeight: '500',
                }}
              >
                {option}
              </Text>
            </View>
          </TouchableRipple>
        ))}
      </View>
    </Card>
  );

  return (
    <LinearGradient colors={gradientColors} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        {showScore ? <ScoreCard /> : <QuizCard />}
      </View>
    </LinearGradient>
  );
}