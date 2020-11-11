import React from 'react';
import data from "../data/works.json";
import { Row, Col, MediaBox } from "react-materialize";

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
                            style={{ display: "flex", height: "160px", border: "1px solid black"}} 
                        />                       
                    </MediaBox>
                </div>
              </div>              
            </Col>
            <Col s={9} m={12} l={4} xl={6}>
              <div>
                <span style={{ display: "inline"}}><h5 style={{ display: "inline-block"}}><b>{data.project}</b></h5> - {data.year}</span>
                <p><span><b>Technos: </b></span>{data.techs}</p>
                <p><span><b>Détails: </b></span>{data.details}</p>
                <p><span><b>Url: </b></span>{ data.url !== "" ? <a href={data.url} alt={data.project} target="_blank" rel="noopener noreferrer">{data.project}</a> : ""}</p>
                <p><span><b>Github: </b></span>{ data.github  !== "" ? <a href={data.github} alt={data.project} target="_blank" rel="noopener noreferrer">{data.project}</a> : ""}</p>
              </div>
            </Col>
         </Row>
    ))
    
);

export default function Works() {
    return (
        <div id="works" className="container" style={{ paddingTop: "10px"}}>
            <Row>
                {travaux()}
            </Row>
        </div>
    );
}