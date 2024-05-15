import React from 'react';
import './Gallery';

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    className='igVideo'
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    className='igImage'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                <img 
                    className='igImage'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
    }   

    return (
        <>
            <div className='appFeed'>
                {post}  
            </div>
        </>
    );
}

export default Feed;