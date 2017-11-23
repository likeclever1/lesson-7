import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../actions/search';

const initialState = {
    isFetching: false,
    result: []
};

const search = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_REQUEST:
            return {
                isFetching: true
            };
        case SEARCH_SUCCESS:
            return {
                isFetching: false,
                result: [...action.payload]
            };
        case SEARCH_FAILURE:
            return {
                isFetching: false
            };
        default:
            return state;
    }
};

export default search;