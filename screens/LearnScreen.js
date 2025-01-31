import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, useTheme, List, Headline } from 'react-native-paper';
import { useThemeContext } from '../navigation/MainNavigator';
import * as Animatable from 'react-native-animatable';

export default function LearnScreen({ navigation }) {
  const { isDarkTheme } = useThemeContext();
  const theme = useTheme();
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    {
      word: 'Aberrant',
      meaning: 'Deviating from the standard or normal; unusual.',
      examples: [
        "The judge found the defendant's behavior to be aberrant in the context of the crime.",
      ],
      root_word: 'Errant',
      synonyms: ['Odd', 'Strange', 'Unusual'],
      antonyms: ['Normal', 'Conventional', 'Typical'],
    },
  ];

  const handleNextWord = () => {
    setWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : 0));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Animatable.View animation="fadeInUp" duration={700} style={styles.animContainer}>
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Headline style={[styles.wordText, { color: theme.colors.primary }]}>
        {words[wordIndex].word}
        </Headline>

          <Paragraph style={[styles.meaningText, { color: theme.colors.onSurfaceVariant }]}>
            {words[wordIndex].meaning}
          </Paragraph>

          <View style={styles.listContainer}>
            <List.Accordion
              title="Root Word"
              titleStyle={{ color: theme.colors.primary, fontWeight: '600' }}
              left={props => <List.Icon {...props} icon="source-branch" />}
            >
              <Paragraph style={styles.listText}>{words[wordIndex].root_word}</Paragraph>
            </List.Accordion>

            <List.Accordion
              title="Synonyms"
              titleStyle={{ color: theme.colors.primary, fontWeight: '600' }}
              left={props => <List.Icon {...props} icon="sync" />}
            >
              <Paragraph style={styles.listText}>{words[wordIndex].synonyms.join(', ')}</Paragraph>
            </List.Accordion>

            <List.Accordion
              title="Antonyms"
              titleStyle={{ color: theme.colors.primary, fontWeight: '600' }}
              left={props => <List.Icon {...props} icon="swap-horizontal" />}
            >
              <Paragraph style={styles.listText}>{words[wordIndex].antonyms.join(', ')}</Paragraph>
            </List.Accordion>

            <List.Accordion
              title="Example"
              titleStyle={{ color: theme.colors.primary, fontWeight: '600' }}
              left={props => <List.Icon {...props} icon="format-quote-close" />}
            >
              <Paragraph style={[styles.listText, styles.italicText]}>
                {words[wordIndex].examples[0]}
              </Paragraph>
            </List.Accordion>
          </View>

          <Animatable.View animation="fadeIn" delay={400} style={styles.buttonContainer}>
            <Button 
              mode="contained"
              onPress={handleNextWord}
              style={styles.nextButton}
              labelStyle={styles.buttonLabel}
              icon="arrow-right"
            >
              Next Word
            </Button>
          </Animatable.View>

          <Animatable.View animation="fadeIn" delay={500} style={styles.buttonContainer}>
            <Button 
              mode="outlined"
              onPress={() => navigation.navigate('Home')}
              style={styles.homeButton}
              labelStyle={styles.buttonLabel}
              icon="home"
            >
              Back to Home
            </Button>
          </Animatable.View>
        </Card>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  animContainer: {
    width: '100%', 
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 25,
    borderRadius: 20,
    elevation: 6,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  wordText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1.3,
  },
  meaningText: {
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    fontSize: 17,
  },
  listContainer: {
    marginBottom: 20,
  },
  listText: {
    padding: 10,
    fontSize: 16,
  },
  italicText: {
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  nextButton: {
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    elevation: 3,
  },
  homeButton: {
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

