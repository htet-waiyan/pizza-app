import { createStore, combineReducers } from 'redux';
import billReducer from './bill/reducer';

const reducers = combineReducers({ bill: billReducer });

export default function createPizzaStore() {
    const store = createStore(reducers);
    return store;
}