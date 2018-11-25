import { all } from 'redux-saga/effects';

import { saga as searchSaga} from '../ducks/search';

export default function* rootSaga() {
    yield all([
        searchSaga(),
    ])
}