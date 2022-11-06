import './Hero.scss';
import DemoImg from './../../Assets/images/demo-2.jpg';

const Hero = () => {
    
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
{/* 
            <div className='hero-main'>

                <div>

                 
                    
                </div>
            

            </div> */}

        </div>
    );
};

export default Hero;