import React from "react";
import { Row, Col } from "react-materialize";
import mySelf from '../../assets/images/myself.jpg';
import github_logo from "../../assets/icons/github.svg";
import linkedin_logo from "../../assets/icons/linkedin.svg";

export default function Home() {

    return (    
    <div className="container">
      <Row className="content-block">
        <div className={ window.innerWidth > 630 ? "valign-wrapper home-contact" : "home-contact"}>
            <Col s={12} m={6} l={4}>
              <div className="center">
                <div><img src={mySelf} alt="paul presboit" style={{ display: "inline-flex", maxWidth: "260px"}} /></div>
              </div>
              <div className="center">
                <a href="https://www.linkedin.com/in/lionel-renier-pro/" target="_blank" rel="noopener noreferrer"><img src={linkedin_logo} alt="linkedin_logo"  height="50px" style={{ marginRight: '5%'}} /></a>
                <a href="https://github.com/frenchincubus" target="_blank" rel="noopener noreferrer"><img src={github_logo} alt="github_logo" height="50px" /></a>
              </div>
            </Col>
            <Col s={12} m={6} l={8}>
              <div className="presentation">
              <p>Bienvenue sur mon Portfolio !</p>
              <p>Je me prénomme Lionel, en reconversion professionnelle, et je viens de terminer une formation de <u>concepteur-développeur d'applications</u>.</p>
              <p>Ce portfolio a pour fonction de vous présenter mon parcours et mes compétences.</p>
              <p>J'ai toujours eu un attrait particulier pour les ordinateurs. Ayant développé mes premiers sites web durant mes années lycée (merci Dreamweaver), mon parcours professionnel varié a toujours été en contact de près ou de loin avec l'informatique.</p>
              <p>Bonne visite !!</p>
              </div>
              <div className="divider"></div>
              <div className="presentation">
                <p><u>Update 08/12/2020</u></p>
                <p>J'entame une spécialisation JEE fullstack d'une durée de 3 mois pour monter en compétence sur l'environnement Java</p>
              </div>
            </Col>
        </div>
      </Row>     
    </div>
    );
}