import 'react-native-gesture-handler';

import React from 'react';
import {AuthProvider} from './contexts/auth';

import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
