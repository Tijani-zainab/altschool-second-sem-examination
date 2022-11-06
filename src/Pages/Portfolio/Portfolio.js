import './Portfolio.scss';
import { Navbar, Hero, Projects } from "../../Components";

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navbar />
            <Hero />
            <Projects />
        </div>
    );
};

export default Portfolio;