import 'firebase/auth';
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import pageReducer from "./reducers/pageReducer";
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    page : pageReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })
   
// Create store with reducers and initial state
const initialState = {}
export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())