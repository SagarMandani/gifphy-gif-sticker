import React from 'react'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Theme, Colors, Constants } from '@common';
import Store from './src/store';
import AppNavigator from './src/Router';

const App = () => {

  return (
    <Provider theme={Theme} store={Store}>
      <StatusBar backgroundColor={Colors.Primary} barStyle={"dark-content"} />
      <AppNavigator />
    </Provider>
  )
}

export default App;