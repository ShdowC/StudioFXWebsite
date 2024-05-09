import './Artist.css';

function Artists(){
    return(
        <section className='App-Artists'> 
            <img src={require('../../resources/Background/ato.png')} alt='bg_img' className='bg_img'/> 
            <div className='artists'>
                <div className="card1">
                    <img src={require('../../resources/Shane.png')} alt="Artist 1" className='img1'/>
                    <h2>Shane Singh</h2>
                    <button>View Gallery</button>
                    <p>Specializes in illustrative color
                    and decorative fine line ornamental art.</p>
                </div>
                <div className="card2">
                    <img src={require('../../resources/Ramon.png')} alt="Artist 2" className='img1'/>
                    <h2>Ramon Gonzales</h2>
                    <button>View Gallery</button>
                    <p>Specializes in illustrative color 
                    and decorative fine line ornamental art.</p>
                </div>                
            </div>

        </section>
    )
}

export default Artists;