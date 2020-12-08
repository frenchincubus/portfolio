import React from "react";
import { Row, Col } from "react-materialize";
import mySelf from '../../assets/images/myself.jpg';
import github_logo from "../../assets/icons/github.svg";
import linkedin_logo from "../../assets/icons/linkedin.svg";

const Contact = () => (
    <>
      <div id="contact" width="100%" className="right-align"><h2 className="white-text">Contact</h2></div> 
      <div className="container">
          <Row className="content-block">
            <div className={ window.innerWidth > 630 ? "valign-wrapper home-contact" : "home-contact"}>
              <Col s={12} m={6} l={4} offset="l2">
                <div className="center">
                  <div><img src={mySelf} alt="paul presboit" className="contact-img" /></div>
                </div>
                
              </Col>
              <Col s={9} m={6} l={6} offset="s2" >
                <div className="left-align contact-pres">
                  <p>Vous pouvez me contacter: </p>
                  <p>(+33)06 85 81 99 13</p>
                  <p>lionelrenier82@gmail.com</p>
                  <div style={{ marginLeft: "5%"}}>
                  <a href="https://www.linkedin.com/in/lionel-renier-pro/" target="_blank" rel="noopener noreferrer"><img src={linkedin_logo} alt="linkedin_logo"  height="50px" style={{ marginRight: '5%'}} /></a>
                  <a href="https://github.com/frenchincubus" target="_blank" rel="noopener noreferrer"><img src={github_logo} alt="github_logo" height="50px" /></a>
                </div>
                </div>
              </Col>
            </div>
          </Row>
      </div>
    </>
);

export default Contact;