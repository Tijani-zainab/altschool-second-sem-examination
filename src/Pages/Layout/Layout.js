import './Layout.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from "../../Components";

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;