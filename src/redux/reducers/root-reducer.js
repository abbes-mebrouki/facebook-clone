import {combineReducers} from 'redux'
import authReducer from './auth-reducer'
import postsReducer from './posts-reducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const reducers = {
  auth: authReducer,
  firebase: firebaseReducer,
  firestoreData: firestoreReducer,
  posts: postsReducer

}

const rootReducer = combineReducers(reducers)

export default rootReducer

