import React from 'react';
import { connect } from 'react-redux';
import SearchItem from './SearchItem';
import {
    searchRequest
} from '../../actions/search';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            query: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleChangeName(e) {
        this.setState({
            query: e.target.value
        });
    }
    handleSearch() {
        const {
            onSearch
        } = this.props;

        onSearch(this.state.query)
    }
    render() {
        const {
            isFetching,
            result
        } = this.props;

        return (
            <div>
                {isFetching
                    ? 'Загрузка...'
                    : 
                    (<div>
                        <div>
                            <input onChange={this.handleChangeName} placeholder="Название Сериала" type="text" />
                            <button type="button" onClick={this.handleSearch}>Найти</button>
                        </div>
                        <div>
                            {result.map(item => 
                                <SearchItem key={item.id} data={item} />
                            )}
                        </div>
                    </div>)}
            </div>
        );
    }
}

const mapStateToProps = ({search}) => ({
    isFetching: search.isFetching,
    result: search.result
});

const mapDispatchToProps = (dispatch) => ({
    onSearch(query) {
        dispatch(searchRequest(query))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);