import HomeRoute from './routes/HomeRoute';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import About from './views/About';
import Bookmarked from './views/Bookmarked';
import LastSeen from './views/LastSeen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { LastSeenProvider } from './contexts/LastSeenContext';

export default function App() {
  const Tab = createBottomTabNavigator();
  function AppProviders({ children }) {
    return (
      <LastSeenProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </LastSeenProvider>
    );
  }

  return (
    <AppProviders>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name='Home'
            component={HomeRoute}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name='Bookmarked'
            component={Bookmarked}
            options={{
              tabBarLabel: 'Bookmarked',
              tabBarIcon: ({ color, size }) => <Ionicons name='heart' color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name='Last seen'
            component={LastSeen}
            options={{
              tabBarLabel: 'Last seen',
              tabBarIcon: ({ color, size }) => <AntDesign name='clockcircleo' color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name='About'
            component={About}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({ color, size }) => <AntDesign name='questioncircleo' color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProviders>
  );
}
