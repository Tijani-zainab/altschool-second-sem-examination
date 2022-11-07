import './Projects.scss';
import { useEffect, useState } from 'react';

const Projects = () => {


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
                    <a href={repo.html_url} target='_blank' rel='noreferrer'>View Repo</a>
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
        <div className='projects'>

            <p className='project-header'>
                <h1>My Recent Completed Projects</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. I am very much interested in getting into hands-on work outside of my regular lectures and routine. I have posted most of the projects that I do. You can get complete access to all these project including the code, related files, and others.
            </p>

            <div className='projects--main'>
                {githubRepo}     
            </div>

            <div className='projects-bottom'>
                <img className='projects-avater' src={avater} alt='avater' />
                <h1>{githubUsername}</h1>
                <button className='btn' onClick={githubRepo}>
                    check me out 
                </button>
            </div>

        </div>
    );
}

export default Projects;