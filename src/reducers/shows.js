import { omit } from 'lodash';
import {
    FETCH_MOVIE,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_ERROR
} from '../actions/index';

const initialState = {
    isFetching: false,
    entities: []
}

const shows = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIE:
            return {
                isFetching: true,
                entities: [...state.entities]
            };
        case FETCH_MOVIE_SUCCESS:
            return {
                isFetching: false,
                entities: [
                    ...state.entities,
                    {
                        cast: [...action.payload._embedded.cast],
                        ...omit(action.payload, ['_links', '_embedded'])
                    }
                ]
            };
        case FETCH_MOVIE_ERROR:
            return initialState;
        default:
            return state;
    }
}

export default shows;