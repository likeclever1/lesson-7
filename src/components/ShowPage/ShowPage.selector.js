import { createSelector } from 'reselect';

export const getIsFetching = state => state.shows && state.shows.isFetching ? state.shows.isFetching : false;
const getShows = (state, props) => state.shows && state.shows.entities ? state.shows.entities : null;
const getUrlParamId = (state, props) => props.match && props.match.params && props.match.params.id ? parseInt(props.match.params.id, 10) : null;

export const getShow = createSelector(
    [getShows, getUrlParamId],
    (items = [], id) => {
        var selected;

        if (items && items.length && id) {
            selected = items.find(item => item.id === parseInt(id, 10))
        }

        return selected;
    }
)