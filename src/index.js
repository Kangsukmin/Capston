import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import {
  ReactReduxFirebaseProvider
} from 'react-redux-firebase'
import { BrowserRouter } from "react-router-dom";
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import store from "./store";
 
const fbConfig = {
  apiKey: "AIzaSyAHEZ7CWleRGUi-7rVVYgTIAWelFo8lU4M",
  authDomain: "living-together-2afce.firebaseapp.com",
  databaseURL: "https://living-together-2afce.firebaseio.com",
  projectId: "living-together-2afce",
  storageBucket: "living-together-2afce.appspot.com",
  messagingSenderId: "536348318949",
  appId: "1:536348318949:web:d0697b446812f7bc83080c",
  measurementId: "G-T4C2FYYTL1"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  //useFirestoreForProfile: true ,// Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
 
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
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
