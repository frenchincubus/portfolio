import React from 'react';
import { Footer } from 'react-materialize';

export default function PortolioFooter() {
    return (
        <Footer
            copyrights="2020 Lionel Rénier"
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="/about">C.V</a></li>
                    <li><a className="grey-text text-lighten-3" href="/works">Portfolio</a></li>
                    <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
                </ul>
            }
        >
            <h5 className="white-text">
                Portfolio
            </h5>
            <p className="grey-text text-lighten-4">
                Site développé en React + Materialize
            </p>
        </Footer>
    );
}