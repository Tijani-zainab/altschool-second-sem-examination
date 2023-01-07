import './Navbar.scss';
import { Twirl as Hamburger } from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    const [links, setLinks] = useState([
        {to: '/', label: 'Home'},
        {to: '/projects', label: 'Projects'},
        {to: '/404', label: '404'},
        {to: '/testErrorBoundary', label: 'Test Error'},
    ]);

    //returns the location object for the current route
    const location = useLocation();

    useEffect(() => {
        setLinks(prevLinks => prevLinks.map(link => ({
            ...link,
            className: link.to === location.pathname ? 'selected' : ''
        })));

    }, [location])
            

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
                            <li key={index} className={link.className}> <Link className='li-link' to={link.to}>{link.label}</Link> </li>
                        )
                    })}
                        
                </ul>
            </nav>

            <div className='hamburger'>
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} onClick={() => setOpen(prev => !prev)}/>
            </div>

            {isOpen && (
                <div className='display-menu'>
                    <ul className='display-menu--links'>
                        {links.map((link, index) => (
                            // <a key={index} style={link.style} href={link.to} onClick={() => setOpen(false)}>
                            //     {link.label}
                            // </a>
                            <li key={index} className={link.className}> 
                                <Link className='li-link' to={link.to} onClick={() => setOpen(false)}>
                                    {link.label}
                                </Link> 
                            </li>
                        ))}
                    </ul>
              </div>
            )}

        </div>
    );
};


export default Navbar;