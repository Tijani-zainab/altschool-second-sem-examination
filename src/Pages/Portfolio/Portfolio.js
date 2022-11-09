import './Portfolio.scss';
import { Navbar, Hero, Projects, ReachOut, Footer } from "../../Components";

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navbar />
            <Hero />
            <Projects />
            <ReachOut />
            <Footer />
        </div>
    );
};

export default Portfolio;