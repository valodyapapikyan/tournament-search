import {Record} from 'immutable';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {createSelector} from 'reselect';

const ReducerRecord = Record({
    tournaments: [],
    storageLength: null,
});

export const SET_STORAGE_LENGTH = 'SET_STORAGE_LENGTH';
export const SEARCH_TOURNAMENTS_REQUEST = 'SEARCH_TOURNAMENTS_REQUEST';
export const SEARCH_TOURNAMENTS_REQUEST_SUCCESS = 'SEARCH_TOURNAMENTS_REQUEST_SUCCESS';

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;

    switch (type) {

        case SET_STORAGE_LENGTH:
            console.log('abshb', action)
            return state
                .set('storageLength', payload);

        case SEARCH_TOURNAMENTS_REQUEST:
            return state;

        case SEARCH_TOURNAMENTS_REQUEST_SUCCESS:
            return state
                .set(
                    'tournaments',
                    payload.documents ? [...payload.documents.slice(0, 10)] : 'no result found'
                );

        default:
            return state;
    }
}


//action craeteors

export function onSearchRequest(pattern) {
    return {type: SEARCH_TOURNAMENTS_REQUEST, pattern}
};

export function setStorageChanges(payload) {
    return {
        type: SET_STORAGE_LENGTH,
        payload: payload.length
    }
}


export const moduleName = 'search';
const stateSelector = (state) => state[moduleName];

export const tournamentsSelector = createSelector(stateSelector, state => state.tournaments);
export const storageChangesSelector = createSelector(stateSelector, state => state.storageLength);


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