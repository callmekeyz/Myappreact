import React from 'react';
import PhotoCard from './PhotoCard';

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
    return (
        <>
            <h2>The Gallery</h2>
            <div className="gallery">
                {
                    data.map(i => <PhotoCard 
                                    title={i.title}
                                    description={i.description}
                                    url={i.url}
                                />)
                }
            </div>
        </>
    );
}

export default PhotoGallery;