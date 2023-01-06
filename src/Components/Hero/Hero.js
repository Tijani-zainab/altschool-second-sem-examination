import './Hero.scss';

const Hero = () => {
    
    return (
        <div className='hero'>

            <div className='hero-main--top'>
                <h1>Hi, <span className='hero--name'>I'm Zainab</span></h1>
                <p>Software Developer</p>
                <p className='hero-desc'> Welcome friends! This collection is of projects, designs, creation and articles. take a little tour and enjoy the ride. </p>

                <button className='btn hire-me-btn'>
                    <a href='/projects'>Hire Me</a>
                </button>
            </div>

        </div>
    );
};

export default Hero;