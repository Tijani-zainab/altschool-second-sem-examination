import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <header className='header'> 
                <h1>Jani.Co</h1> 
            </header>

            <nav className='nav'>
                <ul className='navbar--links'>
                    <li> <Link className='li-link portfolio-link' to="portfolio">Portfolio</Link> </li>
                    <li> <Link className='li-link' to="users">Users</Link> </li>
                </ul>

            </nav>

        </div>
    );
};


export default Navbar;