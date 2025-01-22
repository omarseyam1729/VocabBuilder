import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ScoreScreen({ navigation, route }) {
  // Get the score passed from the previous screen
  const { score } = route.params || { score: 0 };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Score</Text>
      <Text style={styles.score}>{score}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Play Again"
          onPress={() => navigation.navigate('Riddle')}
        />
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          color="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
  },
});
