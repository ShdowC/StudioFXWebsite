import './Body.css';
import { Link } from 'react-router-dom';

function Body(){
    return (
        <>
            <section className='App-Body'>
                <div className='heading'>
                    <h1 >Avoid The <span className='color-change'>Ordinary</span></h1>
                    <Link to="/Appointment">Make an Appointment</Link>
                </div>
            </section>
            <section className='App-Info'>
                <div className='info'>
                    <div className='info-box'>
                        <h3>LOCATION</h3>
                        <p>32 EMR ST AUGUSTINE CAMPUS HOUSE</p>
                        <a href='https://www.google.com/maps/place/Studio+FX/@10.6458859,-61.4018745,17z/data=!3m1!4b1!4m6!3m5!1s0x8c3600bd2269b45d:0x1e05f45bf5230084!8m2!3d10.6458859!4d-61.3992942!16s%2Fg%2F11ggndpkwd?entry=ttu' className='location' target="_blank" rel="noopener noreferrer">STUDIO FX</a>
                    </div>
                    <div className='info-box'>   
                        <h3>HOURS OF OPERATION</h3>
                        <p>OPEN TUESDAY - SUNDAY 11AM TILL</p>
                    </div>
                    <div className='info-box'>
                        <h3>CONTACT</h3>
                        <span>StudioFX: </span><span>1-(868)-367-5908</span>
                        <br></br>
                        <span>MadMenInk: </span><span>1-(868)-305-9588</span>
                    </div>
                </div>
            </section>
        </>
       
    
    )
}

export default Body;