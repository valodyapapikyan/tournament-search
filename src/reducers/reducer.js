import { combineReducers } from 'redux';

import searchReducer, { moduleName as searchModule } from '../ducks/search';
import sharedReducer, { moduleName as sharedModule } from '../ducks/shared';


export default combineReducers({
    [searchModule]: searchReducer,
    [sharedModule]: sharedReducer,
});