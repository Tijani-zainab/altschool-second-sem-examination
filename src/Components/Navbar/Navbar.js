import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <header className='header'> 
                <h1>Jani.Co</h1> 
            </header>

            <nav className='nav'>
                <ul className='navbar--links'>
                    <li> Portfolio </li>
                    <li> Users </li>
                </ul>

            </nav>
        </div>
    );
};


export default Navbar;