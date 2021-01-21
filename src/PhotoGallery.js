import React from 'react';
import PhotoCard from './PhotoCard';

/*
    The <></> JSX are short hand for:
    <React.Fragment></React.Fragment>
    This exists so you don't litter your DOM
    with a bunch of divs.
*/



const data = [
    {
        title: "rainbow",
        description: "its cloud makeup",
        url:"/makeyp2.jpg"
    },
    {
        title: "80's baby",
        description: "retro look",
        url:"/makeup3.webp"
    },
    {
        title: "orangedream",
        description: "orange cut crease",
        url:"/makeup4.jpg"
    },
    {
        title: "double trouble",
        description: "lime green and purple cut crease",
        url:"/makeup5.webp"
    },
    
]

function PhotoGallery() {
    // A React.Fragment is like an Array of Components
    // Also written as <></>
    return (
        <>
            <h2>The Gallery</h2>
            <div className="gallery">
                {
                   data.map(i => <PhotoCard 
                                    title={i.title}
                                    url={i.url}
                                    description={i.description}
                                />)
                }
            </div>
        </>
    );
}

export default PhotoGallery;