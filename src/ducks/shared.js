import {Record} from 'immutable';
import {createSelector} from 'reselect';

const ReducerRecord = Record({
    open: false,
    storageLength: null,

});

export const OPEN_CONFIRM_MODAL = 'OPEN_CONFIRM_MODAL';
export const SET_STORAGE_LENGTH = 'SET_STORAGE_LENGTH';

export const moduleName = 'shared';
const stateSelector = (state) => state[moduleName];

export const modalStatusSelector = createSelector(stateSelector, state => state.open);
export const storageChangesSelector = createSelector(stateSelector, state => state.storageLength);

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;

    switch (type) {  
        case SET_STORAGE_LENGTH:
            return state.set('storageLength', payload);
        
        case OPEN_CONFIRM_MODAL:
            return state.set('open', payload)
        
        default:
            return state;
    }
}

export function setStorageChanges(payload) {
    return {
        type: SET_STORAGE_LENGTH,
        payload: payload.length
    }
}

export  function setModalStatus(payload) {
    return {
        type: OPEN_CONFIRM_MODAL,
        payload,
    }
};


