import React from "react";
import { Row, Col } from "react-materialize";
import { styles } from "../styles/styles";

const Contact = () => (
    <>
      <div id="contact" width="100%" className="right-align" style={{ backgroundColor: "#47191B", padding: "5px 10px 0 0" }}><h2 className="white-text">Contact</h2></div> 
      <div className="container">
          <Row style={styles}>
            <div className={ window.innerWidth > 630 ? "valign-wrapper" : ""} style={{ height: (window.innerHeight - 200) }}>
              <Col s={12} m={6} l={4} offset="l2">
                <div className="center">
                  <div><img src="assets/images/myself.jpg" alt="paul presboit" style={{ display: "inline-flex", maxWidth: "260px"}} /></div>
                </div>
                
              </Col>
              <Col s={9} m={6} l={6} offset="s2" >
                <div style={{ fontSize: "1.4em"}} className="left-align">
                  <p>Vous pouvez me contacter: </p>
                  <p>(+33)06 85 81 99 13</p>
                  <p>lionelrenier82@gmail.com</p>
                  <div style={{ marginLeft: "5%"}}>
                  <a href="https://www.linkedin.com/in/lionel-renier-pro/" target="_blank" rel="noopener noreferrer"><img src="assets/icons/linkedin.svg" alt="linkedin_logo"  height="50px" style={{ marginRight: '5%'}} /></a>
                  <a href="https://github.com/frenchincubus" target="_blank" rel="noopener noreferrer"><img src="assets/icons/github.svg" alt="github_logo" height="50px" /></a>
                </div>
                </div>
              </Col>
            </div>
          </Row>
      </div>
    </>
);

export default Contact;