import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';


export function Gallery({name}){


    return(
        <>
            <div className='artist_name'>
                <h1>{name}</h1>
                <Link to='/Appointment'><button>Make An Appointment</button></Link>
            </div>
            
        </>
       
    )
}

