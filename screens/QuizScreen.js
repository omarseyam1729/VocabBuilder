import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Title, Paragraph, useTheme, List } from 'react-native-paper';

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

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: theme.colors.background }}>
      {showScore ? (
        <Card style={{ padding: 20, width: '90%', alignItems: 'center', borderRadius: 20 }}>
          <Title style={{ textAlign: 'center' }}>Your Score: {score}/{questions.length}</Title>
          <Button mode="contained" onPress={() => {
            setCurrentQuestion(0);
            setScore(0);
            setShowScore(false);
          }} style={{ marginTop: 10, width: '100%' }}>
            Retry Quiz
          </Button>
          <Button mode="outlined" onPress={() => navigation.navigate('Home')} style={{ marginTop: 10, width: '100%' }}>
            Go to Home
          </Button>
        </Card>
      ) : (
        <Card style={{ padding: 20, width: '90%', borderRadius: 20 }}>
          <Title style={{ marginBottom: 10 }}>{questions[currentQuestion].word}</Title>
          <List.Section>
            {questions[currentQuestion].options.map((option) => (
              <List.Item
                key={option}
                title={option}
                onPress={() => handleAnswer(option)}
                style={{ backgroundColor: theme.colors.surface, marginBottom: 10, padding: 10, borderRadius: 10 }}
              />
            ))}
          </List.Section>
        </Card>
      )}
    </View>
  );
}