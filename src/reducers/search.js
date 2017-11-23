import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../actions/index';

const initialState = {
    isFetching: false,
    result: []
};

const search = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                isFetching: false,
                result: [...action.payload]
            };
        case FETCH_MOVIES_ERROR:
            return initialState;
        default:
            return state;
    }
};

export default search;