import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore' // <- needed if using firestore
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { BrowserRouter } from "react-router-dom";
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import store from "./store";
 
const fbConfig = {
  apiKey: "AIzaSyAwaHlPclSQvzqQjrQecSOZlPDkgeE64vI",
  authDomain: "livingtogether-8f106.firebaseapp.com",
  databaseURL: "https://livingtogether-8f106.firebaseio.com",
  projectId: "livingtogether-8f106",
  storageBucket: "livingtogether-8f106.appspot.com",
  messagingSenderId: "87068688529",
  appId: "1:87068688529:web:84a293b1d20b79dbb83f30",
  measurementId: "G-CDZBX9DLTP"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'Administer',
  //useFirestoreForProfile: true ,// Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig);
 
// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
 
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
