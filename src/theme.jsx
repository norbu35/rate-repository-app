import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    bgSecondary: '#e1e4e8',
    bgPrimary: '#ffffffkk',
    textDefault: '#ffffff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'Roboto',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
