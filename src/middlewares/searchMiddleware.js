import { search } from '../api';

import {
    SEARCH_REQUEST,
    searchSuccess,
    searchFailure
} from '../actions/search';

const searchMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === SEARCH_REQUEST) {
        search(action.query)
          .then(data => {
            store.dispatch(
                searchSuccess(data)
            );
          })
          .catch(err => {
            store.dispatch(
                searchFailure(err)
            );
          })
    }
    return result;
};

export default searchMiddleware;