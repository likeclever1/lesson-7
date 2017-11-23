import React from 'react';
import { connect } from 'react-redux';
import {
    fetchMovie
} from '../../actions';

import CastItem from './CastItem';

class ShowPage extends React.Component {
    componentDidMount() {
        const {
            getMovie,
            show
        } = this.props;

        if (!show) {
            getMovie();
        }
    }
    render() {
        const {
            show,
            isFetching
        } = this.props;

        if (isFetching) {
            return 'Загрузка...';
        }

        return (
            <div>
                {!show ? null
                : (<div>
                    <p>{show.name}</p>
                    <img src={show.image ? show.image.medium : null} alt={show.name}/>
                    <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
                    {!show.cast || !show.cast.length ? null :
                        <div>
                            {show.cast.map(item => 
                            <CastItem key={item.person.id} data={item} />)}
                        </div>
                    }
                </div>)
                }
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch, { match }) => ({
    getMovie() {
        if (match.params && match.params.id){
            dispatch(fetchMovie(match.params.id));
        }
    }
});

const mapStateToProps = ({shows}, { match }) => ({
    isFetching: shows.isFetching,
    show: shows.entities.find(item => item.id === parseInt(match.params.id, 10)) // TODO: add selector
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);