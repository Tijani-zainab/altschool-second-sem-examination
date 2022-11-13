import './Portfolio.scss';
import { Navbar, Hero, Projects, ReachOut, Experience, Footer } from "../../Components";

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <ReachOut />
            <Footer />
        </div>
    );
};

export default Portfolio;