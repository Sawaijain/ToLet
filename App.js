/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
  AsyncStorageStatic,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/navigations/Router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </Provider>
  );
};


export default App;
