import React from "react";
import { Divider, Row, Col } from "react-materialize";
import { Formation, Experience, Competences, CompetencesTools } from '../misc/SkillsList';

const AboutMe = () => {
    return (
        <div className="container" style={{ width: "100%"}}>          
            <Row>
                <Col s={12} m={4} l={4}><h4>Formation</h4></Col><Col s={8} m={8} l={8} offset="s2"><Formation/></Col><Col m={12}><Divider/></Col>
            </Row>
            <br/><br/>
            <Row>
            <Col s={12} m={4} l={4}><h4>Expériences</h4></Col><Col s={8} m={8} l={8} offset="s2"><Experience/><Divider/></Col>
            </Row>
            <br/><br/>
            <Row>
            <Col s={12} m={4} l={4}><h4>Compétences</h4></Col>
            <Col s={8} m={8} l={8} offset="s2 m4"><Competences/></Col>
            {/* <Col><CompetencesOthers/></Col> */}            
            </Row>
            <Row>
                <Col s={12} m={4} l={4}><h4>Outils</h4></Col>
                <Col s={8} m={8} l={8} offset="s2 m4"><CompetencesTools/></Col>
            </Row>
        </div>
    );
}

export default AboutMe;