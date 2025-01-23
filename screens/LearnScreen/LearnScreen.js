// src/screens/LearnScreen/LearnScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './LearnScreen.styles';

export default function LearnScreen({ navigation }) {
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    { word: 'Abate', definition: 'To reduce in amount, degree, or severity.' },
    { word: 'Cacophony', definition: 'Harsh, jarring noise.' },
    { word: 'Eloquent', definition: 'Persuasive and moving, especially in speech.' },
    { word: 'Magnanimous', definition: 'Generous or forgiving, especially toward a rival or less powerful person.' },
  ];

  const handleNextWord = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex(wordIndex + 1);
    } else {
      setWordIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{words[wordIndex].word}</Text>
      <Text style={styles.definition}>{words[wordIndex].definition}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNextWord}>
        <Text style={styles.buttonText}>Next Word</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.secondaryButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}