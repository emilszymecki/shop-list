import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import basketReducer from './reducers/basket'

const reducer = combineReducers({
	basket:basketReducer
})


export default createStore( reducer,composeWithDevTools() )