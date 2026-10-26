import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottonTabs from './components/BottonTabs';
import ActionButton from './components/ActionButton';
import Header from './components/Header';
import SocialProvider from './store/SocialProvider';
import { useState } from 'react';


export default function App() {
  const Tab = createBottomTabNavigator();
  const [ currentRoute, setCurrentRoute ] = useState('Home');
  const navigationRef = useNavigationContainerRef();
  
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => 
        setCurrentRoute(navigationRef.current.getCurrentRoute().name)
      }
    >
      <SocialProvider>
        <Header />
        <BottonTabs />
        <ActionButton currentRoute = {currentRoute} />
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
