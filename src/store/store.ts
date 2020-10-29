import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { loginMiddleware } from './middlewares/login.middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root.reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, loginMiddleware)));

export type RootStore = ReturnType<typeof rootReducer>

export default store;