import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import { Fragment } from "react";

const Layout = () => {
    return (
        <Fragment>
            <NavBar />
            <Outlet />
        </Fragment>
    );
}

export default Layout;