import React from 'react';
import { Row, Col } from 'react-materialize';
import { styles } from '../styles/styles';

export default function Home() {

    return (    
    <div className="container">
      <Row style={styles}>
        <div className={ window.innerWidth > 630 ? "valign-wrapper" : ""} style={{ height: (window.innerHeight - 300), top: '200px' }}>
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
              <p>Je me prénomme Lionel, en reconversion professionnelle, et je viens de terminer une formation de concepteur-développeur</p>
              <p>Ce portfolio a pour fonction de vous présenter mon parcours et mes compétences</p>
              <p>J'ai toujours eu un attrait particulier pour les ordinateurs. Ayant développé mes 1ers sites web durant mes années lycée (merci Dreamweaver), mon parcours professionnel varié a toujours été, par la suite, en contact de près ou de loin avec l'informatique</p>
              <p>Bonne visite !!</p>
              </div>
            </Col>
        </div>
      </Row>     
    </div>
    );
}