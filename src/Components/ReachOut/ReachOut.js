import './ReachOut.scss';
import { useState, useEffect } from 'react';

const ReachOut = () => {

    const [avater, setAvater] = useState();
    const [githubUsername, setGithubUsername] = useState();

    useEffect(() => {
        fetch('https://api.github.com/users/tijani-zainab')
            .then(response => response.json())
            .then(data => {
                setAvater(data.avatar_url);
                setGithubUsername(data.login);
            });
    }, []);

    return (
        <div className='reachOut'>

            <div className='reachout-left__img'>
                <img className='reachout-avater' src={avater} alt='avater' />
                <h1>{githubUsername}</h1>
            </div>

            <div className='reachOut-right__text'>
                <h1>Let's work together</h1>
                <p>Have a project in mind? Let's talk about it.</p>
                <button className='btn contact-btn'>Contact Me</button>
            </div>
            
        </div>
    );
}

export default ReachOut;