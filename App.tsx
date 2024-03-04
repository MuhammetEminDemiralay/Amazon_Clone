import { StatusBar } from 'expo-status-bar';
import Router from './src/router';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

function App() {
  return <Router />
}


export default withAuthenticator(App)
