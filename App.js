import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import theme from './src/theme';

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main style={theme.fonts} />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
