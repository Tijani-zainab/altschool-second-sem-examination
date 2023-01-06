import './Navbar.scss';
import { Twirl as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { DisplayMenu } from '../index';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    let links = [
        {to: '/', label: 'Home'},
        {to: '/projects', label: 'Projects'},
        {to: '/404', label: '404'},
        {to: '/testErrorBoundary', label: 'Test Error'},
    ];

    return (
        <div className='navbar'>
            <header className='header'> 
                <a href='/' className='header-link'>
                    <h1>Zainab</h1> 
                </a>
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
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} onClick={() => setOpen(prev => !prev)}/>
            </div>

            {isOpen && (
                <div className='display-menu'>
                    <div className='display-menu--links'>
                        {links.map((link, index) => (
                            <a key={index} href={link.to} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                    </div>
              </div>
            )}

        </div>
    );
};


export default Navbar;