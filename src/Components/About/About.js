import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <p>
                I'm a Software Developer from Lagos Nigeria. I've worked on series of interesting projects, designs, articles and open source collaborations.

                <p>what I am up to:</p>

                I am currently pursuing my diploma in frontend engineering at <a className="about--link" href="https://www.altschoolafrica.com/">AltSchool Africa.</a>
                I am member at <a className="about--link" href="http://waterthetrees.com/">waterthetrees</a> open sourced tree mapping and maintainance project for saving the planet.
                I am member of the community directors for code for san francisco open source
            </p>
        </div>
    );
};

export default About;