import { registerRootComponent } from 'expo';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#DB1D7C',
    secondary: '#378A37',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);

