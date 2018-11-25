import {Record} from 'immutable';
import {createSelector} from 'reselect';

const ReducerRecord = Record({
    open: false
});


export const OPEN_CONFIRM_MODAL = 'OPEN_CONFIRM_MODAL';


export const moduleName = 'shared';
const stateSelector = (state) => state[moduleName];

export const modalStatusSelector = createSelector(stateSelector, state => state.open);

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;

    switch (type) {  
        
        case OPEN_CONFIRM_MODAL:
         return state
         .set('open', payload)
        
        default:
            return state;
    }
}


export  function setModalStatus(payload) {
    return {
        type: OPEN_CONFIRM_MODAL,
        payload,
    }
};


