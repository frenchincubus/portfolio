import React, { useContext } from 'react';
import 'materialize-css';
import { Navbar, NavItem, Icon, Switch } from 'react-materialize';
import LandingContext from '../context/LandingContext';

const Menu = () => {

    const { landing, updateLanding } = useContext(LandingContext);
    // let landing = true;

    const handleLanding = () => {
        updateLanding(!landing);
    };
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
            <NavItem className="waves-effect waves-light sidenav-close" href={landing ?"#top" : "/"}>Home</NavItem>
            <NavItem className="waves-effect waves-light sidenav-close" href={landing ?"#about" : "about"}>C.V</NavItem>
            <NavItem className="waves-effect waves-light sidenav-close" href={landing ? "#works" : "works"}>Portfolio</NavItem>
            <NavItem className="waves-effect waves-light sidenav-close" href={landing ? "#contact" :"contact"}>Contact</NavItem>
            {/* <NavItem >Landing mode:</NavItem> */}
            <NavItem>
                <Switch
                    id="Switch-11"
                    offLabel=" Landing mode: Off"
                    onChange={handleLanding}
                    onLabel="On"
                    checked={landing}
                />
            </NavItem>            
        </Navbar>
    );
}

export default Menu;
