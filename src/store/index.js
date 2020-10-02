import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index';
import rootSaga from '../saga/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            sagaMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

sagaMiddleware.run(rootSaga);

export default store;