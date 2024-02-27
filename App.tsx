import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'

export default function App() {
  return (
    <View>
      <StatusBar/>
      <HomeScreen/>
    </View>
  );
}

