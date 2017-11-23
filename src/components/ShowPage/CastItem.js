import React from 'react';

const CastItem = ({data}) => (
    <div>
        <p>{data.person.name}</p>
        {data.person.image && data.person.image.medium ?
            <img src={data.person.image.medium} alt={data.person.name} /> : null}
    </div>
);

export default CastItem;