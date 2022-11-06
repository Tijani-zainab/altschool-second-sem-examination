import './Hero.scss';
import { useEffect, useState } from 'react';
import DemoImg from './../../Assets/images/demo-2.jpg';

const Hero = () => {

    const [avater, setAvater] = useState();
    const [githubUsername, setGithubUsername] = useState();
    const [githubRepo, setGithubRepo] = useState();


    async function getRepos() {
        const response = await fetch('https://api.github.com/users/tijani-zainab/repos');
        const data = await response.json();
        console.log(data);

        const repos = data.map((repo) => {
            return (
                <div className='repo'>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                </div>
            );
        });

        setGithubRepo(repos);
    }

    // getRepos();

    useEffect(() => {
        getRepos();
    }, []);


    useEffect(() => {
        fetch('https://api.github.com/users/tijani-zainab')
            .then(response => response.json())
            .then(data => {
                setAvater(data.avatar_url);
                setGithubUsername(data.login);
            });
    }, []);
    
    return (
        <div className='hero'>

            <div className='hero-main--top'>
                <h1>Hi, I'm Jani</h1>
                <p>Frontend Developer</p>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <button className='btn hire-me-btn'>Hire Me</button>
            </div>


            <p className='project-description'>
                <h1>My Recent Completed Projects</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. I am very much interested in getting into hands-on work outside of my regular lectures and routine. I have posted most of the projects that I do. You can get complete access to all these project including the code, related files, and others.
            </p>

            <div className='hero-main--bottom'>
                <div className='hero-main--bottom--left'>
                    <img src={avater} alt='avater' />
                    <h1>{githubUsername}</h1>
                    <button className='btn' onClick={githubRepo}>
                        check me out 
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Hero;