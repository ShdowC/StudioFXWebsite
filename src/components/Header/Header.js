import  './Header.css';

function Header(){
    return (
        <div className="App-Header">
            <header className="App-header">
                <img src={require('../../resources/logo.png')} alt='logo'/>
            </header>
        </div>
    )
}

export default Header;