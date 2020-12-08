import React from "react";
import ReactHtmlParser from "react-html-parser";
import { worksData } from "../data/worksData";
import { Row, Col, MediaBox } from "react-materialize";
import { imgStyle } from "../styles/styles";

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
    worksData.map((data, index) => (
        <Row key={index} className="portfolio-row">
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
                            src={data.image} 
                            alt={data.project} 
                            style={imgStyle} 
                        />                       
                    </MediaBox>
                </div>
              </div>              
            </Col>
            <Col s={12} m={12} l={4} xl={6}>
              <div>
                <span className="portfolio-block-title"><h5><b>{data.project}</b></h5> - {data.year} {data.progression ?  ReactHtmlParser('- <b style="background-color:red;"> en développement </b>') : "" }</span>
                <p className="portfolio-text"><span><b>Technos: </b></span>{data.techs}</p>
                <p className="portfolio-text"><span><b>Détails: </b></span>{data.details}</p>
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
            <div id="works" width="100%" className="right-align"><h2 className="white-text">Portfolio</h2></div> 
            <div className="container portfolio-container" >
                <Row className="content-block">
                    {travaux()}
                </Row>
            </div>
        </>
    );
}