import { search } from '../api';

import {
    FETCH_MOVIES
} from "../actions/index";

import {
    fetchMoviesSuccess,
    fetchMoviesError
} from '../actions/index';

const searchMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === FETCH_MOVIES) {
        search(action.query)
          .then(data => {
            store.dispatch(
                fetchMoviesSuccess(data)
            );
          })
          .catch(err => {
            store.dispatch(
                fetchMoviesError(err)
            );
          })
    }
    return result;
};

export default searchMiddleware;