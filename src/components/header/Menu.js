import React from 'react';
import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Menu = () => {
    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/">Lionel Rénier</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem className="waves-effect waves-light" href="/">Home</NavItem>
            <NavItem className="waves-effect waves-light" href="about">C.V</NavItem>
            <NavItem className="waves-effect waves-light" href="works">Portfolio</NavItem>
            <NavItem className="waves-effect waves-light" href="contact">Contact</NavItem>            
        </Navbar>
    );
}

export default Menu;
