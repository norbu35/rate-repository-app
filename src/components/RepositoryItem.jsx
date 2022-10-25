import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ item }) => {
  const numShortened = (num) => {
    if (num > 900) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num);
    }
    return num;
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: '1em',
    },
    image: {
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: '0.5em',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    heading: {
      flex: 1,
      paddingLeft: '1em',
      flexWrap: 'wrap',
    },
    stats: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.image}>
          <Image
            source={{ uri: item.ownerAvatarUrl }}
            style={{
              width: 50,
              height: 50,
              borderRadius: '5px',
            }}
          />
        </View>
        <View style={styles.heading}>
          <Text fontWeight="bold" color="textSecondary">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
        </View>
      </View>
      <View style={{ paddingTop: '0.5em', ...styles.row }}>
        <View style={{ width: 60, ...styles.image }} />
        <View style={{ ...styles.heading, flex: 0 }}>
          <Text
            style={{
              backgroundColor: 'dodgerblue',
              borderRadius: '5px',
              padding: '0.5em',
            }}
          >
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={{ textAlign: 'center' }}>
          <Text fontWeight="bold" color="textSecondary">
            {numShortened(item.forksCount)}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={{ textAlign: 'center' }}>
          <Text fontWeight="bold" color="textSecondary">
            {numShortened(item.stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={{ textAlign: 'center' }}>
          <Text fontWeight="bold" color="textSecondary">
            {numShortened(item.reviewCount)}
          </Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={{ textAlign: 'center' }}>
          <Text fontWeight="bold" color="textSecondary">
            {numShortened(item.ratingAverage)}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
