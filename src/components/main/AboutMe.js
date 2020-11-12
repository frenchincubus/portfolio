import React from "react";
import { Divider, Row, Col } from "react-materialize";
import { Formation, Experience, Competences, CompetencesTools } from '../misc/SkillsList';
import { styles } from '../styles/styles';

const AboutMe = () => {
    return (
        <>
            <div id="about" width="100%" className="right-align" style={{ backgroundColor: '#47191B', padding: '5px 10px 0 0' }}><h2 className="white-text">Curriculum Vitae</h2></div> 
            <div className="container">  

                <Row style={styles}>
                    <Col s={12} m={4} l={4}><h4>Expériences</h4></Col><Col s={12} m={8} l={8} ><Experience/></Col><Col m={12}><Divider/></Col>
                </Row>
                <br/><br/>
                <Row style={styles}>
                <Col s={12} m={4} l={4}><h4>Formation</h4></Col><Col s={8} m={12} l={8} offset="s2"><Formation/><Divider/></Col>
                </Row>
                <br/><br/>
                <Row style={styles}>
                <Col s={12} m={4} l={4}><h4>Compétences</h4></Col>
                <Col s={12} m={8} l={8} offset="m4"className="center-align"><Competences/></Col>
                {/* <Col><CompetencesOthers/></Col> */}            
                </Row>
                <Row style={styles}>
                    <Col s={12} m={4} l={4}><h4>Outils</h4></Col>
                    <Col s={12} m={8} l={8} offset="m4" className="center-align"><CompetencesTools/></Col>
                </Row>
            </div>
        </>
    );
}

export default AboutMe;