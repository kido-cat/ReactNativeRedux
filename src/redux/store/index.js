import {applyMiddleware, createStore} from 'redux';
import productReducer from '../reducer/index';
import thunk from 'redux-thunk';

const store = createStore(productReducer,applyMiddleware(thunk));
export default store;