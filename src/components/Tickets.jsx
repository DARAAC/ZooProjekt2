import Banner from "./Banner.jsx"
import Rhino from "../assets/headerRhino.jpg"
import Navigation from "./Navigation.jsx";
import React from "react";


function Tickets() {

    return(
        <div className="Tickets">
            <Navigation></Navigation>
            {/* Logo */}
            <div className="logo">
                <img src='/src/assets/logo.png' alt="Zoo Logo"/>
            </div>
            <div>
                <Banner image={Rhino} />
            </div>
        </div>
    );

}

export default Tickets