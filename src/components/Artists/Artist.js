import './Artist.css';
import { Link } from 'react-router-dom';

function Artists(){
    return(
        <section className='App-Artists'> 
            <img src={require('../../resources/Background/ato.png')} alt='bg_img' className='bg_img'/> 

            <div className='sectionHeader'>
                 <h1>ARTISTS</h1>
            </div>
            

            <div className='artists'>
                <div className="card1">
                    <img src={require('../../resources/Shane.png')} alt="Artist 1" className='profileImg'/>
                    <Link to='/Gallery/StudioFX'><button>View Gallery</button></Link>
                    <h2>SHANE SINGH</h2>
                    <p>SPECIALIZES IN SHANEING</p>
                </div>

                <div className="card2">
                    <img src={require('../../resources/Ramon.png')} alt="Artist 2" className='profileImg'/>
                    <Link to='/Gallery/MadMenInk'><button>View Gallery</button></Link>
                    <h2>RAMON GONZALES</h2>
                    <p>SPECIALIZES IN SHANEING</p>
                </div>                
            </div>

        </section>
    )
}

export default Artists;