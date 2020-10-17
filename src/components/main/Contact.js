import React from 'react';
import { Row, Col } from 'react-materialize';

const Contact = () => (
    <div>
        <Row>
            <Col s={12} m={6} l={4} offset="l2">
              <div className="center">
                <div><img src="assets/images/téléchargement.jpg" alt="paul presboit" style={{ display: 'inline-flex', margin: "20px"}} /></div>
              </div>
              <div className="center">
                <a href="https://www.linkedin.com/in/lionel-renier-pro/" target="_blank" rel="noopener noreferrer"><img src="assets/icons/linkedin.svg" alt="linkedin_logo"  height="50px" style={{ marginRight: '5%'}} /></a>
                <a href="https://github.com/frenchincubus" target="_blank" rel="noopener noreferrer"><img src="assets/icons/github.svg" alt="github_logo" height="50px" /></a>
              </div>
            </Col>
            <Col s={9} m={6} l={4} offset="s3">
              <div>
                <p>Vous pouvez me contacter: </p>
                <p>(+33)06 85 81 99 13</p>
                <p>lionelrenier82@gmail.com</p>
              </div>
            </Col>
         </Row>
    </div>
);

export default Contact;