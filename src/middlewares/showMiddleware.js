import { show } from '../api';

import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/show';

const showMiddleware = store => next => action => {
    const result = next(action);

    if (action.type === showRequest.toString()) {
        show(action.payload.id)
            .then(data => {
                store.dispatch(
                    showSuccess(data)
                );
            })
            .catch(err => {
                store.dispatch(
                    showFailure(err)
                );
            })
        ;
          
    }
    return result;
};

export default showMiddleware;