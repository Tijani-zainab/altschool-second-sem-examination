import { Routes, Route } from 'react-router-dom';
import { NotFound, Portfolio } from '../../Pages';
// import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

const Routing = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Portfolio />} /> */}
            {/* <Route path='not-espected' element={<ErrorBoundary />} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Routing;
