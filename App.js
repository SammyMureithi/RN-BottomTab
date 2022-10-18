import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailedScreen from './Screens/DetailedScreen';
import HomeScreen from './Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Screens/SettingsScreen';


const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={( { route } ) => ( {
        tabBarLabelPosition:'below-icon',
        tabBarIcon: ( { focused, color, size } ) => {
          let iconName;
          
          if ( route.name === "Home" ) {
           
              iconName = "home-outline"
          }
          else if ( route.name === "Detailed" ) {
            iconName="planet-outline"
          }
          else {
            iconName="settings-outline"
          }
          return <Ionicons name={iconName} size={30} color="red"/>;
        },
        tabBarActiveTintColor:"tomato"
      })}>
        <BottomTab.Screen name='Home' component={HomeScreen}  />
        <BottomTab.Screen name='Detailed' component={DetailedScreen} />
        <BottomTab.Screen name='Settings' component={SettingsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


