
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './QuizScreen.styles';

export default function QuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([
    { id: '1', question: 'What is the meaning of "aberration"?', options: ['Deviation', 'Clarity', 'Agreement', 'Action'], answer: 'Deviation' },
    { id: '2', question: 'What is the synonym of "benevolent"?', options: ['Kind', 'Hostile', 'Careless', 'Arrogant'], answer: 'Kind' },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
          >
            <Text style={styles.buttonText}>Retry Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.secondaryButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>

          <FlatList
            data={questions[currentQuestion].options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleAnswer(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
