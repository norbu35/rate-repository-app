import { View, StyleSheet } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text }) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '1em',
    },
  });

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">
        {text}
      </Text>
    </View>
  );
};

export default AppBarTab;
