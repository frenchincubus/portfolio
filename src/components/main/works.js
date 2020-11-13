import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import data from "../data/works.json";
import { Row, Col, MediaBox } from "react-materialize";
import { styles } from '../styles/styles';

/**
 * works.json format
 * 
 * [
    {
        "project": "portfolio",
        "year": "2020",
        "techs" : "React, MaterializeCss",
        "image" : "portfolio.png",
        "url" : "project prod/public url",
        "github": "github url,
        "details": "details of the project"
    },
    ...
    ]
 */

const travaux = () => (
    data.map((data, index) => (
        <Row key={index} style={{borderBottom: "1px solid black"}}>
            <Col s={12} m={8} l={8} xl={4} offset="xl2">
              <div className="right">
                <div>
                    <MediaBox
                        id={"MediaBox_"+ (parseInt(index)+1)}
                        options={{
                            inDuration: 275,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200
                        }}
                        >                        
                        <img 
                            src={"assets/images/"+data.image} 
                            alt={data.project} 
                            style={{ display: "flex", maxWidth: "100%", maxHeight: "200px", border: "1px solid black"}} 
                        />                       
                    </MediaBox>
                </div>
              </div>              
            </Col>
            <Col s={12} m={12} l={4} xl={6}>
              <div>
                <span style={{ display: "inline"}}><h5 style={{ display: "inline-block"}}><b>{data.project}</b></h5> - {data.year} {data.progression ?  ReactHtmlParser('- <b style="background-color:red;"> en développement </b>') : '' }</span>
                <p style={{ textAlign: 'justify'}}><span><b>Technos: </b></span>{data.techs}</p>
                <p style={{ textAlign: 'justify'}}><span><b>Détails: </b></span>{data.details}</p>
                <p><span><b>Url: </b></span>{ data.url !== "" ? <a href={data.url} alt={data.project} target="_blank" rel="noopener noreferrer">{data.project}</a> : ""}</p>
                <p><span><b>Github: </b></span>{ data.github  !== "" ? <a href={data.github} alt={data.project} target="_blank" rel="noopener noreferrer">{data.project}</a> : ""}</p>
              </div>
            </Col>
         </Row>
    ))
    
);

export default function Works() {
    return (
        <>
            <div id="works" width="100%" className="right-align" style={{ backgroundColor: '#47191B', padding: '5px 10px 0 0' }}><h2 className="white-text">Portfolio</h2></div> 
            <div className="container" style={{ paddingTop: "10px"}}>
                <Row style={styles}>
                    {travaux()}
                </Row>
            </div>
        </>
    );
}