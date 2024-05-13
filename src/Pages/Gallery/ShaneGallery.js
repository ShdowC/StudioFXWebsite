import React from 'react'
import './Gallery';

export const getStaticProps = async () => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_KEY}`;
    const data = await fetch(url)
    const feed = await data.json();
    console.log(feed);

    return {props: {dataFeed: feed} };
}; 


function ShaneGallery({dataFeed}) {

return (
    <>
        <div className='gallery-container'> 
            <h1>Images</h1>
            <div>
                {dataFeed?.map((image) => (
                    <div key={image.id}>
                        <img src={image.media_url} alt={image.caption} />
                    </div>
                    
                ))}
            </div>
           
        </div>
    </>
   
  )
}

export default ShaneGallery;



