import './Landing.scss';
import { Hero, Contact, About, Skills, Blog, Footer} from "../../Components";

const Portfolio = () => {
    return (
        <div className='Landing'>
            <Hero />
            <About />
            <Skills />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Portfolio;