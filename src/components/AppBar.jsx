import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '4em',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab text="Repositories" />
        </Link>
        <Link to="/signin">
          <AppBarTab text="Sign in" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
