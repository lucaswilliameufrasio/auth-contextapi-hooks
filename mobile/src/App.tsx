import 'react-native-gesture-handler';

import React from 'react';
import {AuthProvider} from './contexts/auth';
import {SnackBarProvider} from './contexts/snack';

import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SnackBarProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SnackBarProvider>
    </NavigationContainer>
  );
};

export default App;
