import React, { useContext } from 'react';
import { Router, Route } from 'react-router';
import AboutMe from './AboutMe';
import { createBrowserHistory } from "history";
import Works from './works';
import Home from './Home';
import Contact from './Contact';
import LandingContext from '../context/LandingContext';
import { Button, Icon } from 'react-materialize';

const Main = () => {
    const histoire = createBrowserHistory();

    const contextValue = useContext(LandingContext);

    if (contextValue.landing){
        return <div id="top" className="main" style={{width: "100%"}}>
            <Home/>
            <AboutMe />
            <Works />
            <Contact />
            <Button
                className="red"
                floating
                icon={<Icon>arrow_circle_up</Icon>}
                large
                node="button"
                fab={{direction: 'right'}}
                onClick={() => window.scrollTo(0,0)}
                />
        </div>;
    } else {
    return  <div className="main" style={{width: "100%"}}>
            <Router history={histoire}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/works" component={Works}/>
                <Route path="/contact" component={Contact}/>
            </Router>  
        </div>
    ;}
}

export default Main;