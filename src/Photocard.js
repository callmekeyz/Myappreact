import React, { useState } from 'react';

/*
Work from the "inside-out",
and from the smallest to larest.
Do one before you do many.
*/

function PhotoCard(props) {
    // useState returns an array.
    // The first item is the current value
    // The second item is a function that can update value
    const state = useState(0);
    const count = state[0];
    const setCount = state[1];
    const setUnlike = state[1];
    // The inital 0 is ignored after the first time
    // that the PhotoCard function is called.

    console.log(props);
    // add "conditional rendering"
    return (
        <div className="card-frame">
            <button onClick={
                (e) => {
                    console.log('omg a click!');
                    console.log('yeahhhh');
                  
                    setCount(count + 1);
                    console.log(count);
                }
            }>Like {count ? count : null} </button>

            <button onClick={
                (e) => {
                
                    //setCount(count - 1);
                    console.log('dislike');
                    setUnlike(unlike +1)
                }
            }>dislike</button>

            <p>likes: {count} </p> <p>dislike: {unlike} </p>

            { props.title ? <h3>{props.title}</h3> : <h3>untitled</h3>}
            <img src={props.url} alt={props.description} />
            <p>{props.description}</p>
        </div>
    );
}

export default PhotoCard;