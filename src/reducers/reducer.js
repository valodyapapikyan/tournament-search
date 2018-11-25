import { combineReducers } from 'redux';

import searchReducer, { moduleName as searchModule } from '../ducks/search';

export default combineReducers({
    [searchModule]: searchReducer,
});