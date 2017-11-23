import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ data }) => (
    <div>
        <div>
            <Link to={`/shows/${data.id}`}>
                <h3>{data.id}</h3>
            </Link>
            <img src={data.image ? data.image.medium : null} alt={data.name}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: data.summary}}></div>
    </div>
);

export default SearchItem;