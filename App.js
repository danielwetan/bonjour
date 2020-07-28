import React from 'react';
import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import storage from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = storage;

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View>
            <Text>Hello</Text>
          </View>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
