import { Routes, Route } from 'react-router-dom';
import { Layout, Landing, NotFound, Projects } from '../../Pages';
import { TestErrorBoundary } from '../../Components';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/testErrorBoundary' element={<TestErrorBoundary />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Routing;
