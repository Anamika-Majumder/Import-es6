import React from 'react';

const Watch = () => {
    const {name, price} = watch;
    return (
        <div>
            <h2>Watches:{name}</h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;