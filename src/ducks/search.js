import {Record} from 'immutable';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {createSelector} from 'reselect';

const ReducerRecord = Record({
    tournaments: [],
    loader: false,
});

export const SEARCH_TOURNAMENTS_REQUEST = 'SEARCH_TOURNAMENTS_REQUEST';
export const SEARCH_TOURNAMENTS_REQUEST_SUCCESS = 'SEARCH_TOURNAMENTS_REQUEST_SUCCESS';

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;

    switch (type) {
        case SEARCH_TOURNAMENTS_REQUEST:
            return state
            .set('loader', true)

        case SEARCH_TOURNAMENTS_REQUEST_SUCCESS:
            return state
                .set(
                    'tournaments',
                     payload.documents ? [...payload.documents.slice(0, 10)] : 'no result found',
                )
                .set('loader', false)

        default:
            return state;
    }
}

export function onSearchRequest(pattern) {
    return {type: SEARCH_TOURNAMENTS_REQUEST, pattern}
};

export const moduleName = 'search';
const stateSelector = (state) => state[moduleName];

export const tournamentsSelector = createSelector(stateSelector, state => state.tournaments);
export const loaderStatus = createSelector(stateSelector, state => state.loader);

export const searchSaga = function* (payload) {
    const {pattern} = payload;

    try {
        const tournaments = yield call(axios, `https://api-search.staging.win.gg/search?q=${pattern}&index=tournament`);
        yield put({
            type: SEARCH_TOURNAMENTS_REQUEST_SUCCESS,
            payload: {...tournaments.data[0]}
        })
    } catch (error) {
        console.error(error.message)
    }
};

export const saga = function* () {
    yield all([
        takeEvery(SEARCH_TOURNAMENTS_REQUEST, searchSaga),
    ]);
}