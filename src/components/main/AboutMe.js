import React from "react";
import { Divider, Row, Col } from "react-materialize";
import { Formation, Experience, Competences, CompetencesOthers, CompetencesTools } from '../misc/SkillsList';

const AboutMe = () => {
    return (
        <div className="container" style={{ width: "100%"}}>          
            <Row>
                <Col s={8} m={8} l={8} offset="s2 m4 l5"><Formation/></Col><Col m={12}><Divider/></Col>
                <Col s={8} m={8} l={8} offset="s2 m4 l5"><Experience/><Divider/></Col>
                <Col s={8} m={8} l={8} offset="s2 m4 l3"><Competences/><CompetencesOthers/><CompetencesTools/></Col>
            </Row>
        </div>
    );
}

export default AboutMe;