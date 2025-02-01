import AppRoutes from "../routes/routes";
import Footer from "./footer";
import Navbar from "./navbar";

import { BrowserRouter } from "react-router-dom";
// import useDisableDevTools from "../hooks/useDisableDevTools";

const Dashboard = () => {

    // Using useDisableDevTools custom hook inside the functional component
    // useDisableDevTools(); 

    return(

        <BrowserRouter>
        
            <Navbar/>
            <AppRoutes/>
            <Footer/>

        </BrowserRouter>
    )

}

export default Dashboard;