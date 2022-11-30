import './Navbar.scss';
import { Twirl as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    let links = [
        {to: '/', label: 'Home'},
        {to: '/projects', label: 'Projects'},
        {to: '/404', label: '404'},
        {to: '/errorBoundary', label: 'Error Boundary'},
    ];

    return (
        <div className='navbar'>
            <header className='header'> 
                <h1>Jani.Co</h1> 
            </header>

            <nav className='nav'>
                <ul className='navbar--links'>
                    {links.map((link, index) => {
                        return (
                            <li key={index}> <Link className='li-link' to={link.to}>{link.label}</Link> </li>
                        )
                    })}
                        
                </ul>
            </nav>

            <div className='hamburger'>
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>

        </div>
    );
};


export default Navbar;