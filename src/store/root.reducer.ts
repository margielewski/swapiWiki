import { combineReducers } from 'redux';
import planetsReducer from './planets/planetsList/planets.reducer';
import planetDetailsReducer from './planets/planetDetails/planetDetails.reducer';
import charactersReducer from './characters/charactersList/characters.reducer';
import characterDetailsReducer from './characters/characterDetails/characterDetails.reducer';


const rootReducer = combineReducers({
    planets: planetsReducer,
    planetDetails: planetDetailsReducer,
    characters: charactersReducer,
    characterDetails: characterDetailsReducer
});

export default rootReducer;