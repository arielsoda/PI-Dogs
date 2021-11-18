import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
/* RootReducer */
import rootReducer from '../reducer/index';
/* Redux dev tools ext */
const devToolsRedux = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunkMiddleware), devToolsRedux)
);

export default store;