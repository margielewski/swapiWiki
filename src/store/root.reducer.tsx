import { combineReducers } from 'redux';
import planetsReducer from './planets/planets.reducer';


const rootReducer = combineReducers({
    planets: planetsReducer
});

export default rootReducer;