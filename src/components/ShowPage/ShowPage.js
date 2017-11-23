import React from 'react';
import { connect } from 'react-redux';
import { getShow, getIsFetching } from './ShowPage.selector';
import CastItem from './CastItem';
import {
    showRequest
} from '../../actions/show';

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

        if (isFetching) return 'Загрузка...';

        return (
            <div>
                {!show ? null
                : (<div>
                    <p>{show.name}</p>
                    {show.image && show.image.medium ?
                        <img src={show.image.medium} alt={show.name}/> : null}
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

const mapStateToProps = (state, props) => ({
    isFetching: getIsFetching(state),
    show: getShow(state, props)
});

const mapDispatchToProps = (dispatch, { match }) => ({
    getMovie() {
        if (match.params && match.params.id){
            dispatch(showRequest({id: match.params.id}));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);