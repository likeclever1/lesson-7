import { show } from '../api';

import {
    FETCH_MOVIE
} from "../actions/index";

import {
    fetchMovieSuccess,
    fetchMovieError
} from '../actions/index';

const showMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === FETCH_MOVIE) {
        show(action.id)
            .then(data => {
                store.dispatch(
                    fetchMovieSuccess(data)
                );
            })
            .catch(err => {
                store.dispatch(
                    fetchMovieError(err)
                );
            })
        ;
          
    }
    return result;
};

export default showMiddleware;