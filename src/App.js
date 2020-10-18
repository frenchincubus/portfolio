import React from 'react';

import Main from './components/main/Main';
import Menu from './components/header/Menu';
import PortolioFooter from './components/footer/Footer';
import CookieConsent from 'react-cookie-consent';

export default function App() {
    return (
        <>
            <header><Menu /></header>
            <main className="valign-wrapper" style={{backgroundColor: "lightgray"}}><Main /></main>
            <footer style={{ bottom: "0px"}}><PortolioFooter /></footer>
            <CookieConsent
                buttonText="Ok !!"
                debug={true}
            >Ce site ne recueille pas vos cookies</CookieConsent>
        </>
    );
    
}
