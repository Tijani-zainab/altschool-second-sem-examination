import { Routes, Route } from 'react-router-dom';
import { Layout, Landing, NotFound, Projects } from '../../Pages';
import {TestErrorBoundary, DisplayMenu} from '../../Components';
import { useState } from 'react';

const Routing = () => {

    const [isOpen, setOpen] = useState(false);

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
        <DisplayMenu isOpen={isOpen} />
        </div>
    );
};

export default Routing;
