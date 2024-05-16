import './Footer.css'

function Footer(){
    return (
        <footer className='App-Footer'>
            <div className='Follow'>
                <div className='artist2'>
                    <a href='https://www.facebook.com/vs.studiofx/' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/white-07.png')} alt='logo' className='icon'/></a>
                    <a href='https://www.instagram.com/studiofx.ato/?hl=en' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/white-03.png')} alt='logo' className='icon'/></a>
                    <a href='https://www.tiktok.com/@studiofx868.ato?lang=en' target="_blank" rel="noopener noreferrer"><img src={require('../../resources/icons/white-01.png')} alt='logo' className='icon'/></a>
                </div>
            </div>
            <div className='Company_'>
                    <span>© 2024 StudioFX && MadMenInk. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer;