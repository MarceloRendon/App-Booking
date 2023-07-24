import { Outlet } from "react-router-dom";
import COM_NavBar from "./COM_NavBar";
import COM_Footer from "./COM_Footer";
export default function Layout(){

    return (
        <div className="p-4 flex flex-col min-h-screen">
            <COM_NavBar></COM_NavBar>
            
            <Outlet></Outlet>

            {/* Filler */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            {/* Footer */}
            <COM_Footer></COM_Footer>

            
        </div>
    )
}