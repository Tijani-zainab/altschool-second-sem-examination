import './Navbar.scss';
import { Twirl as Hamburger } from 'hamburger-react';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    let hashlinks = [
        {to: '/#home', label: 'Home'},
        {to: '/#about', label: 'About'},
        {to: '/#projects', label: 'Projects'},
    ]

    return (
        <div className='navbar'>
            <header className='header'> 
                <h1>Jani.Co</h1> 
            </header>

            <nav className='nav'>
                <ul className='navbar--links'>
                    {hashlinks.map((link, index) => {
                        return (
                            <li key={index}> <HashLink className='li-link' to={link.to}>{link.label}</HashLink> </li>
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