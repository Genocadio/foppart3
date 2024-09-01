import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text'; // Import the custom Text component



  
const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statText: {
    fontWeight: 'bold',
  },
});

const RepositoryStats = ({ stars, forks, rating, reviews }) => {
    const formatCount = (count) => {
        if (count >= 1000) {
          return `${(count / 1000).toFixed(1)}k`;
        }
        return count.toString();
      };
  return (
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <Text style={styles.statText}>{formatCount(stars)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>{formatCount(forks)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>{rating}</Text>
        <Text>Rating</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>{reviews}</Text>
        <Text>Reviews</Text>
      </View>
    </View>
  );
};

export default RepositoryStats;
