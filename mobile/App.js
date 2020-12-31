import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MyTabs from './src/Navigation/BottomNavigation';
import Store from './src/store';

export default function App() {
  return (
    <Store>
      <MyTabs />
    </Store>
  );
}

