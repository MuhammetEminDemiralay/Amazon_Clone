import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import ProductScreen from "./src/screens/ProductScreen"
import ShoopingCartScreen from "./src/screens/ShoopingCartScreen"
import AddressScreen from './src/screens/AddressScreen';
export default function App() {
  return (
    <View>
      <StatusBar/>
      {/* <HomeScreen/> */}
      {/* <ProductScree n/> */}
      {/* <ShoopingCartScreen/> */}
      <AddressScreen />
    </View>

  );
}

