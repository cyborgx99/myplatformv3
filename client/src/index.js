import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './components/Spinner/Spinner';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
