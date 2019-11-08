import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {routerMiddleware} from 'connected-react-router';
import history from './history';
import {composeWithDevTools} from 'redux-devtools-extension';

export function configureStore(preloadedState = {}) {
    const middlewareEnhancer = applyMiddleware(routerMiddleware(history));
    let composedEnhancers;
    composedEnhancers = composeWithDevTools(middlewareEnhancer);
    if (process.env.NODE_ENV === 'development') {
        composedEnhancers = composeWithDevTools(middlewareEnhancer);
    } else {
        composedEnhancers = compose(middlewareEnhancer);
    }
    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    if (process.env.NODE_ENV === 'development' && module.hot) {
        // 当 reducers 文件有改动时，触发热更新
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

export default configureStore();
