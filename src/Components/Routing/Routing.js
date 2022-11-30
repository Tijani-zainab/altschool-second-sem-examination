import { Routes, Route } from 'react-router-dom';
import { Layout, Landing, NotFound, Projects } from '../../Pages';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Landing />} />
                <Route path='/projects' element={<Projects />} />
                <Route path="*" element={<NotFound />} />
                <Route path='/errorBoundary' element={<ErrorBoundary />} />
            </Route>
        </Routes>
    );
};

export default Routing;
