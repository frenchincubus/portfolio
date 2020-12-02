import React, { useState } from "react";
import LandingContext from "./components/context/LandingContext";
import Main from "./components/main/Main";
import Menu from "./components/header/Menu";
import PortolioFooter from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";

export default function App() {
    const [landing, setLanding] = useState(false);

    const contextValue = {
        landing,
        updateLanding: setLanding
    };

    return (
        <LandingContext.Provider value={contextValue}>
            <header><Menu /></header>
            <main className="valign-wrapper" style={{backgroundColor: "lightgray"}}><Main /></main>
            <footer style={{ bottom: "0px"}}><PortolioFooter /></footer>
            <CookieConsent
                buttonText="Ok !!"
                debug={false}
            >Ce site ne recueille pas vos cookies</CookieConsent>
        </LandingContext.Provider>
    );
    
}
