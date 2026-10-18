import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottonTabs from './components/BottonTabs';
import ActionButton from './components/ActionButton';
import Header from './components/Header';
import SocialProvider from './store/SocialProvider';


export default function App() {
  return (
    <NavigationContainer>
      <SocialProvider>
        <Header />
        <BottonTabs />
        <ActionButton />
      </SocialProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
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
