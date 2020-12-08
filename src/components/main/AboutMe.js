import React from "react";
import { Divider, Row, Col } from "react-materialize";
import { Formation, Experience, Competences, CompetencesTools, Divers } from "../misc/SkillsList";

const AboutMe = () => {
    return (
        <>
            <div id="about" width="100%" className="right-align"><h2 className="white-text">Curriculum Vitae</h2></div> 
            <div className="container">  

                <Row className="content-block">
                    <Col s={12} m={4} l={4}><h4>Expériences</h4></Col><Col s={12} m={8} l={8} ><Experience/></Col><Col m={12}><Divider/></Col>
                </Row>
                <br/><br/>
                <Row className="content-block">
                <Col s={12} m={4} l={4}><h4>Formation</h4></Col><Col s={8} m={12} l={8} offset="s2"><Formation/><Divider/></Col>
                </Row>
                <br/><br/>
                <Row className="content-block">
                <Col s={12} m={4} l={4}><h4>Compétences</h4></Col>
                <Col s={12} m={8} l={8} offset="m4" className="center-align"><Competences/></Col>
                {/* <Col><CompetencesOthers/></Col> */}            
                </Row>
                <Row className="content-block">
                    <Col s={12} m={4} l={4}><h4>Outils</h4></Col>
                    <Col s={12} m={8} l={8} offset="m4" className="center-align"><CompetencesTools/></Col>
                </Row>
                <Row className="content-block">
                    <Col s={12} m={4} l={4}><h4>Autres</h4></Col>
                    <Col s={12} m={8} l={8} offset="m4" className="left -align"><Divers/></Col>
                </Row>
            </div>
        </>
    );
};

export default AboutMe;