import React from 'react';
import { Router, Route } from 'react-router';
import AboutMe from './AboutMe';
import { createBrowserHistory } from "history";
import Works from './works';
import Home from './Home';
import Contact from './Contact';

function Main () {
    const histoire = createBrowserHistory();
    return  <div className="main" style={{width: "100%"}}>
            <Router history={histoire}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/works" component={Works}/>
                <Route path="/contact" component={Contact}/>
            </Router>  
        </div>
    ;
}

export default Main;