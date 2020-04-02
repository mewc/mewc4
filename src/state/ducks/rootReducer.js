import { combineReducers } from 'redux';
import { app } from './app';
import { projects } from './projects';

const reducers = {
    app,
    projects
}

export default () => combineReducers(reducers);