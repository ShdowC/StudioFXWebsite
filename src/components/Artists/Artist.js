import './Artist.css';

function Artists(){
    return(
        <div className='artists'> 
            <h1>Artists</h1>
            <div>
                <div className="card1">
                    <img src={require('../../resources/headshot.jpg')} alt="Artist 1" className='img1'/>
                    <h2>Artist 1</h2>
                    <button>View Gallery</button>
                    <p>Filler Text</p>
                </div>
                <div className="card2">
                    <img src={require('../../resources/headshot.jpg')} alt="Artist 2" className='img2'/>
                    <h2>Artist 1</h2>
                    <button>View Gallery</button>
                    <p>Filler Text</p>
                </div>                
            </div>

        </div>
    )
}

export default Artists;