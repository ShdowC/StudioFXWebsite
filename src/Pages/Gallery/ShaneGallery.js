import React from 'react'
import './Gallery';

function ShaneGallery({feed}) {
  console.log(feed);  
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
    const url = `https://graph.instagram.com/me?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_KEY}`;
    const data = await fetch(url)
    const feed = await data.json();

    return {
        props: {
            feed,
        }
    }
};

