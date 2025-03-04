import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BadgesStreaks from './src/BadgesStreaks';
import CalendarInput from './src/CalendarInput';
import Conversations from './src/Conversations';
import Insights from './src/Insights';
import MoodInput from './src/MoodInput';
import Notifications from './src/Notifications';
import Profile from './src/Profile';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import About from './src/routes'
import Home from './src/routes'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="BadgesStreaks" component={BadgesStreaks} />
        <Stack.Screen name="Calendar" component={CalendarInput} />
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="Insights" component={Insights} />
        <Stack.Screen name="MoodInput" component={MoodInput} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
