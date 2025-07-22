
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabBar from './components/BottomTabBar';
import HomeScreen from './components/HomeScreen';
import FinanceScreen from './components/FinanceScreen';
import ProcessScreen from './components/ProcessScreen';
import DashboardScreen from './components/DashboardScreen';
import ReportsScreen from './components/ReportsScreen';
import FinanceDetailScreen from './components/FinanceDetailScreen'; // Ensure this is the correct path




export default function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Finance':
        return <FinanceScreen />;
      case 'Process':
        return <ProcessScreen />;
      case 'Dashboard':
        return <DashboardScreen />;
      case 'Reports':
        return <ReportsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <NavigationContainer>
            
      <View style={styles.container}>
        <View style={styles.content}>
          {renderContent()}
        </View>
        <BottomTabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});