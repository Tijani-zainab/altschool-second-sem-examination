import './Projects.scss';
import { useEffect, useState } from 'react';

const Projects = () => {

    const [avater, setAvater] = useState();
    const [githubUsername, setGithubUsername] = useState();
    const [githubRepo, setGithubRepo] = useState([]);
    const [displayRepo, setDisplayRepo] = useState();
    const [loading, setLoading] = useState(true);


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

    useEffect(() => {
         const diplayItems = githubRepo.slice(0, 3);
            setDisplayRepo(diplayItems);
            setLoading(false);
    }, [githubRepo]);

    // getRepos();

    useEffect(() => {
        getRepos();
    }, []);
    

    // const handleShowMore = () => {
    //     const diplayItems = githubRepo.slice(0, githubRepo.length);
    //     setDisplayRepo(diplayItems);
    // };


    const handleNext = () => {
        if(githubRepo.length > 3) {
            const diplayItems = githubRepo.slice(3, githubRepo.length);
            setDisplayRepo(diplayItems);
        } else {
            const diplayItems = githubRepo.slice(0, 3);
            setDisplayRepo(diplayItems);
        } 

    };

    const handlePrev = () => {
        if(githubRepo.length > 3) {
            const diplayItems = githubRepo.slice(0, 3);
            setDisplayRepo(diplayItems);
        } else {
            const diplayItems = githubRepo.slice(0, 3);
            setDisplayRepo(diplayItems);
        }
    };

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
                <div className='projects--main--top'>
                    {loading ? <h1>Loading...</h1> : displayRepo}
                </div>
                {/* {githubRepo}      */}
                <button className='btn prev-btn' onClick={handlePrev}> Prev </button>
                <button className='btn next-btn' onClick={handleNext}> Next </button>
            </div>

            <div className='projects-bottom'>
                <img className='projects-avater' src={avater} alt='avater' />
                <h1>{githubUsername}</h1>
                <button className='btn'>
                    check me out 
                </button>
            </div>

        </div>
    );
}

export default Projects;