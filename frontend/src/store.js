import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { taskListReducer } from './reducers/taskListReducers';
import { areaListReducer } from './reducers/areaListReducers';

const reducer = combineReducers({
    taskList: taskListReducer,
    areaList: areaListReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
