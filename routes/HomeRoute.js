import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Bookmarked from '../views/Bookmarked';
import LastSeen from '../views/LastSeen';

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Homepage' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Bookmarked' component={Bookmarked} />
      <Stack.Screen name='LastSeen' component={LastSeen} />
    </Stack.Navigator>
  );
}
