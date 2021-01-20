import React from 'react';

function Photocard(props) {
    console.log(props);
    return (
        <div className="card-frame">
            <img src={props.url}/>
        </div>
    );
}

export default Photocard;