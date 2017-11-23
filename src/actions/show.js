import { createActions } from 'redux-actions';

export const {
    show: {
        request: showRequest,
        success: showSuccess,
        failure: showFailure
    }
} = createActions(
    {
        SHOW: {
            REQUEST: undefined,
            SUCCESS: undefined,
            FAILURE: undefined
        }
    },
    {
        namespace: '_'
    }
);