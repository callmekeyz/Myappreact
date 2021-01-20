import React from 'react';

export default function PhotoCard
(props) {
    return (
        <div className="card-frame">
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={props.url}/>
        </div>
    );
}

