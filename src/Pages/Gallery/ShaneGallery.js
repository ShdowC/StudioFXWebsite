import React, { useState, useEffect, useRef } from 'react';
import './Gallery';
import axios from 'axios';
import Feed from './Feed';

const ShaneGallery = ({token, ...props}) => {

    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fetch function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])


return (
    <>
        <div className='container'> 
            <h1>Instagram Feed</h1>
            
            <div className="container">
                {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
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

    console.log(feed);

    return {props: {feed}, };
}; 

