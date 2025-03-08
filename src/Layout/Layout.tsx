import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";

export const Layout = () => {

    return (
        <div>
            <Navbar/>
            <Outlet /> {/* Renders the current page's content*/}
        </div>
    )
}

