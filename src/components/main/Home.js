import React from 'react';
import { Row, Col } from 'react-materialize';

export default function Content() {

    return (    
    <div className="container">
      <Row >
        <div className={ window.innerWidth > 630 ? "valign-wrapper" : ""} style={{ height: (window.innerHeight - 200) }}>
            <Col s={12} m={6} l={4}>
              <div className="center">
                <div><img src="assets/images/téléchargement.jpg" alt="paul presboit" style={{ display: 'inline-flex', margin: "20px"}} /></div>
              </div>
              <div className="center">
                <a href="https://www.linkedin.com/in/lionel-renier-pro/" target="_blank" rel="noopener noreferrer"><img src="assets/icons/linkedin.svg" alt="linkedin_logo"  height="50px" style={{ marginRight: '5%'}} /></a>
                <a href="https://github.com/frenchincubus" target="_blank" rel="noopener noreferrer"><img src="assets/icons/github.svg" alt="github_logo" height="50px" /></a>
              </div>
            </Col>
            <Col s={12} m={6} l={8}>
              <div style={{ fontSize: "1.3em"}}>
              <p>Bienvenue sur mon Portfolio !</p>
              <p>Je me prénomme Lionel, je suis en reconversion professionnelle, et je viens de terminer une formation de concepteur-développeur</p>
              <p>Mon parcours ? Quelques temps en intérim, puis quelques années en tant que technicien d'exploitation, et aussi musicien. </p>
              <p>Ce portfolio a pour fonction de vous présenter mon parcours et mes compétences</p>
              <p>Bonne visite !!</p>
              </div>
            </Col>
        </div>
      </Row>
     
    </div>
    );
}