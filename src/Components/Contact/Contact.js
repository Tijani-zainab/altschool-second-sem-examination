import React from 'react';
import './Contact.scss';
import { HashLink } from 'react-router-hash-link';
// import ArrowUpwardIcon from './../Assets/Icons/arrow_circle_up.png';

const ReachOut = () => {

    return (
        <div className='contact'>   

            <h1>Contact</h1> 

            <form>
                <h3>reach out here!</h3>

                <label htmlFor="username">Name</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Email</label>
                <input type="password" placeholder="Password" id="password" />

                <label htmlFor="message">Message</label>
                <textarea type="text" placeholder="Message" id="message" />
                <button>Send Message</button>
            </form>
            <HashLink to={'/#home'} className='back-to-top' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}> back to top </HashLink>
            
        </div>
    );
}

export default ReachOut;