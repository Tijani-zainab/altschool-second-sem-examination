import { Routes, Route } from 'react-router-dom';
import { NotFound, Projects, Landing } from '../../Pages';

const Routing = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Landing />} /> */}
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routing;
