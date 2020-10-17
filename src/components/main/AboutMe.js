import React from "react";
import { Divider, Row, Col } from "react-materialize";
import { Formation, Experience, Competences, CompetencesOthers, CompetencesTools } from '../misc/SkillsList';

const AboutMe = () => {
    return (
        <div className="container" style={{ width: "100%"}}>          
            <Row>
                <Col s={12} m={2} l={2}><h4>Formation</h4></Col><Col s={8} m={8} l={8} offset="s2"><Formation/></Col><Col m={12}><Divider/></Col>
                {/* <Col s={8} m={8} l={8} offset="s2 m4 l5"><Experience/><Divider/></Col> */}
                {/* <Col s={8} m={8} l={8} offset="s2 m4 l3"><Competences/><CompetencesOthers/><CompetencesTools/></Col> */}
            </Row>
            <Row>
            <Col s={12} m={2} l={2}><h4>Expériences</h4></Col><Col s={8} m={8} l={8} offset="s2"><Experience/><Divider/></Col>
            </Row>
            <Row>
            <Col s={12} m={2} l={2}><h4>Compétences</h4></Col>
            <Col s={8} m={8} l={8} offset="s2 m4"><Competences/></Col>
            {/* <Col><CompetencesOthers/></Col> */}            
            </Row>
            <Row>
                <Col s={12} m={2} l={2}><h4>Outils</h4></Col>
                <Col><CompetencesTools/></Col>
            </Row>
        </div>
    );
}

export default AboutMe;