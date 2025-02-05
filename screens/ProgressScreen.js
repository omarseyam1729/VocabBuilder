import React from 'react';
import { View, Dimensions } from 'react-native';
import { Text, ProgressBar, Card, useTheme, IconButton } from 'react-native-paper';
import { ContributionGraph } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const ProgressScreen = ({ route }) => {
  const theme = useTheme();
  const {
    progress = 0,
    wordsLearned = 0,
    quizzesSolved = 0,
    heatmapData = []
  } = route.params || {};

  const gradientColors = [theme.colors.primaryContainer, theme.colors.surface];

  const StatCard = ({ title, value, icon }) => (
    <Card
      style={{
        padding: 20,
        borderRadius: 16,
        backgroundColor: theme.colors.elevation.level1,
        elevation: 4,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flex: 1,
        marginHorizontal: 6,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <IconButton
          icon={icon}
          size={32}
          color={theme.colors.primary}
          style={{
            backgroundColor: theme.colors.primaryContainer,
            marginBottom: 8,
          }}
        />
        <Text
          variant="titleLarge"
          style={{
            color: theme.colors.primary,
            fontWeight: '700',
            fontSize: 24,
            marginBottom: 4,
          }}
        >
          {value}
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.onSurfaceVariant,
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </View>
    </Card>
  );

  return (
    <LinearGradient colors={gradientColors} style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Card
          style={{
            padding: 24,
            borderRadius: 20,
            backgroundColor: theme.colors.elevation.level1,
            elevation: 6,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            marginBottom: 20,
          }}
        >
          <Text
            variant="titleLarge"
            style={{
              textAlign: 'center',
              marginBottom: 16,
              fontSize: 24,
              fontWeight: '700',
              color: theme.colors.primary,
            }}
          >
            Overall Progress
          </Text>
          <ProgressBar
            progress={progress}
            color={theme.colors.primary}
            style={{
              height: 12,
              borderRadius: 6,
              backgroundColor: theme.colors.surfaceVariant,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 12,
              fontSize: 16,
              color: theme.colors.onSurface,
              fontWeight: '600',
            }}
          >
            {(progress * 100).toFixed(1)}% Completed
          </Text>
        </Card>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            marginHorizontal: -6,
          }}
        >
          <StatCard
            title="Words Learned"
            value={wordsLearned}
            icon="book-open-variant"
          />
          <StatCard
            title="Quizzes Solved"
            value={quizzesSolved}
            icon="check-circle"
          />
        </View>

        <Card
          style={{
            padding: 24,
            borderRadius: 20,
            backgroundColor: theme.colors.elevation.level1,
            elevation: 6,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          }}
        >
          <Text
            variant="titleMedium"
            style={{
              textAlign: 'center',
              marginBottom: 16,
              fontSize: 20,
              fontWeight: '600',
              color: theme.colors.primary,
            }}
          >
            Learning Activity
          </Text>
          {heatmapData.length > 0 ? (
            <View style={{ alignItems: 'center' }}>
              <ContributionGraph
                values={heatmapData}
                endDate={new Date()}
                numDays={100}
                width={Math.min(360, width - 80)}
                height={220}
                chartConfig={{
                  backgroundGradientFrom: theme.colors.elevation.level1,
                  backgroundGradientTo: theme.colors.elevation.level1,
                  color: (opacity = 1) => `${theme.colors.primary}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
                  labelColor: () => theme.colors.onSurface,
                  style: {
                    borderRadius: 16,
                  },
                }}
                gutterSize={4}
                squareSize={16}
              />
            </View>
          ) : (
            <View style={{ alignItems: 'center', padding: 20 }}>
              <IconButton
                icon="chart-timeline-variant"
                size={48}
                color={theme.colors.onSurfaceVariant}
                style={{ opacity: 0.5 }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: theme.colors.onSurfaceVariant,
                  marginTop: 8,
                }}
              >
                No Activity Data Available
              </Text>
            </View>
          )}
        </Card>
      </View>
    </LinearGradient>
  );
};

export default ProgressScreen;