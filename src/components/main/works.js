import React from 'react';
import data from "../data/works.json";
import { Row, Col, MediaBox } from "react-materialize";

const travaux = () => (
    data.map((data, index) => (
        <Row key={index} style={{borderBottom: "1px solid black"}}>
            <Col s={12} m={6} l={5} offset="l2">
              <div className="left">
                <div>
                    <MediaBox
                        id="MediaBox_7"
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
                            style={{ display: 'inline-flex', height: "200px", border: "1px solid black"}} 
                        />
                    </MediaBox>
                </div>
              </div>              
            </Col>
            <Col s={9} m={6} l={4} offset="s3">
              <div>
                <p>{data.project} </p>
                <p>{data.techs}</p>
                <p>{data.details}</p>
    <p><a href={data.url} alt={data.project} target="_blank">{data.project}</a></p>
              </div>
            </Col>
         </Row>
    ))
    
);

export default function Works() {
    return (
        <div className="container">
            <Row>
                {travaux()}
            </Row>
        </div>
    );
}