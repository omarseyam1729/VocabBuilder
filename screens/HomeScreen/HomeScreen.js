import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './HomeScreen.styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: '' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to VocabBuilder!</Text>
      <Text style={styles.subtitle}>
        Boost your vocabulary.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Learn')}
      >
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.secondaryButtonText}>Take a Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Progress')}
      >
        <Text style={styles.secondaryButtonText}>View Progress</Text>
      </TouchableOpacity>
    </View>
  );
}
