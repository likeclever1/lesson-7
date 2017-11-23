import { omit } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/show';

const isFetching = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false,
        [showFailure]: () => false
    },
    false
);

const entities = handleActions(
    {
        [showSuccess]: (state, action) => {
            return [
                ...state,
                {
                    cast: [...action.payload._embedded.cast],
                    ...omit(action.payload, ['_links', '_embedded'])
                }
            ]
        },
        [showFailure]: (state, action) => {
            return [
                ...state
            ]
        }
    },
    []
);

export default combineReducers({
    isFetching,
    entities
});