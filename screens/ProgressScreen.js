import React from 'react';
import { View } from 'react-native';
import { Text, ProgressBar, Card, useTheme } from 'react-native-paper';
import { ContributionGraph } from 'react-native-chart-kit';

const ProgressScreen = ({ route }) => {
  const theme = useTheme();

  // Get progress data from navigation props, provide default values
  const { progress = 0, wordsLearned = 0, quizzesSolved = 0, heatmapData = [] } = route.params || {};

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: theme.colors.background }}>
      <Card style={{ padding: 20, borderRadius: 15, marginBottom: 20 }}>
        <Text variant="titleLarge" style={{ textAlign: 'center', marginBottom: 10 }}>
          Your Progress
        </Text>
        <ProgressBar progress={progress} color={theme.colors.primary} style={{ height: 10, borderRadius: 5 }} />
        <Text style={{ textAlign: 'center', marginTop: 10 }}>{(progress * 100).toFixed(2)}% Completed</Text>
      </Card>

      <Card style={{ padding: 20, borderRadius: 15, marginBottom: 20 }}>
        <Text variant="titleMedium">Words Learned: {wordsLearned}</Text>
        <Text variant="titleMedium">Quizzes Solved: {quizzesSolved}</Text>
      </Card>

      <Card style={{ padding: 20, borderRadius: 15 }}>
        <Text variant="titleMedium" style={{ textAlign: 'center', marginBottom: 10 }}>Activity Heatmap</Text>
        {heatmapData.length > 0 ? (
          <ContributionGraph
  values={heatmapData}
  endDate={new Date()}
  numDays={120}  // Increase number of days for better spacing
  width={400}    // Increase width
  height={250}   // Increase height
  chartConfig={{
    backgroundGradientFrom: theme.colors.background,
    backgroundGradientTo: theme.colors.background,
    color: (opacity = 1) => theme.colors.primary,
    labelColor: (opacity = 1) => theme.colors.onBackground,
  }}
  gutterSize={6} // Increase spacing between blocks
/>

        ) : (
          <Text style={{ textAlign: 'center', marginTop: 10 }}>No Activity Data Available</Text>
        )}
      </Card>
    </View>
  );
};

export default ProgressScreen;
