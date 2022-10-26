import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { data, error, loading } = useQuery(GET_USER);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signOut = () => {
    authStorage.removeAccessToken();
    client.resetStore();
  };

  if (loading) return <div>Loading...</div>;
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab text="Repositories" />
        </Link>
        {data.me ? (
          <Pressable onPress={signOut}>
            <AppBarTab text="Sign out" />
          </Pressable>
        ) : (
          <Link to="/signin">
            <AppBarTab text="Sign in" />
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
