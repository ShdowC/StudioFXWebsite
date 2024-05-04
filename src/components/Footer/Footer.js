import './Footer.css'

function Footer(){
    return (
        <div className='App-Footer'>
            <div className='Location'>
                <a href='https://www.google.com/maps/place/Studio+FX/@10.6458859,-61.4018745,17z/data=!3m1!4b1!4m6!3m5!1s0x8c3600bd2269b45d:0x1e05f45bf5230084!8m2!3d10.6458859!4d-61.3992942!16s%2Fg%2F11ggndpkwd?entry=ttu'>32 EMR St Augustine Campus House</a>
            </div>
            <div className='Contact'>
                <p>Contact</p>
                <p>1-(868)-367-5908</p>
                <p>1-(868)-305-9588</p>
            </div>
            <div className='Follow'>
                <div className='artist1'>
                    <a href='https://www.facebook.com/vs.studiofx/' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/red-07.png')} alt='logo' className='icon'/></a>
                    <a href='https://www.instagram.com/studiofx.ato/?hl=en' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/red-03.png')} alt='logo' className='icon'/></a>
                    <a href='https://www.tiktok.com/@studiofx868.ato?lang=en' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/red-01.png')} alt='logo' className='icon'/></a>
                </div>
                <div className='artist2'>
                    <a href='https://www.facebook.com/vs.studiofx/' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/red-07.png')} alt='logo' className='icon'/></a>
                    <a href='https://www.instagram.com/studiofx.ato/?hl=en' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/red-03.png')} alt='logo' className='icon'/></a>
                    <a href='https://www.tiktok.com/@studiofx868.ato?lang=en' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/red-01.png')} alt='logo' className='icon'/></a>
                </div>
                

            </div>
        </div>
    )
}

export default Footer;