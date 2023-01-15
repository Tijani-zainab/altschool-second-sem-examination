import './Landing.scss';
import { Hero, Contact, About, Skills, Blog, Footer} from "../../Components";

const Portfolio = () => {
    return (
        <div className='Landing'>
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Blog />
            <Footer />
        </div>
    );
};

export default Portfolio;