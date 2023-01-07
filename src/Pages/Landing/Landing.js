import './Landing.scss';
import { Hero, Contact, About, Skills, Footer} from "../../Components";

const Portfolio = () => {
    return (
        <div className='Landing'>
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Portfolio;