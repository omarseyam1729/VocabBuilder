import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to RiddleQuest!</Text>
      <Button
        title="Start Riddle"
        onPress={() => navigation.navigate('Riddle')}
      />
      <Button
        title="View Score"
        onPress={() => navigation.navigate('Score', { score: 0 })}
        color="gray"
      />
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
    marginBottom: 20,
  },
});
