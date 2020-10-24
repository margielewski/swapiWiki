import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root.reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof rootReducer>

export default store;