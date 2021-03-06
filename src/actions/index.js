import { createActions } from 'redux-actions';

export const {
    search: {
        request: searchRequest,
        success: searchSuccess,
        failure: searchFailure
    }
} = createActions(
    {
        SEARCH: {
            REQUEST: null,
            SUCCESS: null,
            FAILURE: null
        }
    },
    {
        namespace: '_'
    }
);

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