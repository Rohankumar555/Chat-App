import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';

import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// import store from './store'
// let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //   <App />
  //   </Provider>
    
  // </React.StrictMode>
  
    <React.StrictMode>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </React.StrictMode>
  //</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
