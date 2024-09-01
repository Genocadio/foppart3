import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.backgroundWhite,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar uri={item.ownerAvatarUrl} />
        <RepositoryInfo 
          fullName={item.fullName} 
          description={item.description} 
          language={item.language} 
        />
      </View>
      <RepositoryStats 
        stars={item.stargazersCount} 
        forks={item.forksCount} 
        rating={item.ratingAverage} 
        reviews={item.reviewCount} 
      />
    </View>
  );
};

export default RepositoryItem;
