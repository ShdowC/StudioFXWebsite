import  './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="App-Header">
            <header className="App-header">
                <Link to='/'><img src={require('../../resources/logo.png')} alt='logo'/></Link>  
            </header>
        </div>
    )
}

export default Header;