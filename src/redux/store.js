import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root-reducer'

import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))