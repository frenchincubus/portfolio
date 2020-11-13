import React from "react";
import { Footer } from "react-materialize";

export default function PortolioFooter() {
    return (
        <Footer
            copyrights="2020 Lionel Rénier"
            // links={
            //     <ul>
            //         <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
            //         <li><a className="grey-text text-lighten-3" href="/about">C.V</a></li>
            //         <li><a className="grey-text text-lighten-3" href="/works">Portfolio</a></li>
            //         <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
            //     </ul>
            // }
        >
            
            <p className="grey-text text-lighten-4">
            Portfolio - Site développé en <a href="https://fr.reactjs.org/" alt="react" target="_blank" rel="noopener noreferrer">React</a> + <a href="http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome" alt="materialize" target="_blank" rel="noopener noreferrer">Materialize</a>
            </p>
        </Footer>
    );
}