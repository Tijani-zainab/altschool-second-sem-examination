import './Portfolio.scss';
import { Navbar, Hero, Projects, Footer } from "../../Components";

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navbar />
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
};

export default Portfolio;