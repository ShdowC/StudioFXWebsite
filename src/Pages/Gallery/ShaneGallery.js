import React from 'react';
import './Gallery';

function ShaneGallery({feed}) {

    const images = feed;
    if(feed === undefined){
        console.log("...... :( ");
    }
    console.log(feed);

return (
    <>
        <div className='container'> 
            <h1>Instagram Feed</h1>
            
            <div>
                {images?.map((image) => (
                    <div key={image.id}>
                        <img    
                            src={image.media_url}
                            alt={image.caption} />
                    </div>
                    
                ))}
            </div>
           
        </div>
    </>
   
  )
}

export default ShaneGallery;

export const getStaticProps = async () => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.REACT_APP_INSTAGRAM_KEY}`;
    const data = await fetch(url)
    const feed = await data.json();

    return {props: {feed}, };
}; 