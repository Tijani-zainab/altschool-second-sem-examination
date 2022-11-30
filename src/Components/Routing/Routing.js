import { Routes, Route } from 'react-router-dom';
import { NotFound, Projects, Landing } from '../../Pages';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/projects' element={<Projects />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/errorBoundary' element={<ErrorBoundary />} />
        </Routes>
    );
};

export default Routing;
