import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import theme from './src/theme';
import createApolloClient from './apolloClient';

const apolloClient = createApolloClient();
const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main style={theme.fonts} />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
