import { combineReducers } from 'redux';
import planetsReducer from './planets/planetsList/planets.reducer';
import planetDetailsReducer from './planets/planetDetails/planetDetails.reducer';


const rootReducer = combineReducers({
    planets: planetsReducer,
    planetDetails: planetDetailsReducer
});

export default rootReducer;