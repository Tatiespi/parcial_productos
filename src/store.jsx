// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Importa redux-thunk para manejar acciones asíncronas
import postsReducer from './postReducers' 

// Aplica el middleware redux-thunk para manejar acciones asíncronas
const store = createStore(postsReducer, applyMiddleware(thunk));

export default store;

