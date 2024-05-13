import React from 'react'
import './Gallery';

function ShaneGallery() {
  return (
    <>
        <div className='gallery-container'> 
            <h1>Images go here</h1>
        </div>
    </>
   
  )
}

export default ShaneGallery

export const getStaticProps = async () => {
    const url = 'https://graph.instagram.com/me?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=$IGQWRONG9vT2d0SWNGOGY3QzVCSDhXaHZA2djRJNWw2UUdMNHlkcGRBSTJPWFNYUW1sMGpGSVFWd3RNcGRzYnhqN2xlQnFjWXRaOTl6RGl1OEpRVEZAkVzhYV3IzZADh3eE5Yenlpd3FZAWHlxaDI3aFJQX3RNby1RYlEZD';
    const data = await fetch(url)
    const feed = await data.json();

    console.log(feed);
};