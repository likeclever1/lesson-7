import React from 'react';

const CastItem = ({data}) => (
    <div>
        <p>{data.person.name}</p>
        <img src={data.person.image ? data.person.image.medium : null} alt={data.person.name} />
    </div>
);

export default CastItem;