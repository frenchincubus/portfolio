import React from "react";
import { Button, Modal } from "react-materialize";
import ReactHtmlParser from "react-html-parser";
import { aboutme } from "../data/me";
import { imgStyles, pStyle, blockStyle, otherStyle, experienceButton } from '../styles/styles';

/**
 *  me.json format
 * 
 * "name": "example",
    "age": 88,
    "location": "Nowhere",
    "formation": [
        {
            "date": "some date",
            "school": "school",
            "graduation": "diplome name",
            "degree": "bac+X bachelor or whatever"
        },
        ...
    ],
    "experiences" : [
        {
            "date": "some date",
            "society": "society name",
            "poste": "job",
            "color": "orange",
            "details": "job tasks - you can use html tag"
        },
        ...
    ],
    "skills": {
            "languages" : [
                {"language": "php", "level": 4, "img": "php.svg"},
                ...
            ],
            "tools": [
                {"tool": "react", "level": 3, "img": "react.svg"},
                ...
            ]

        }
    
}
 */

export const Formation = () => {
     let cards = (aboutme.formation).map((element, index) => (
         <div className="row" key={index} style={blockStyle}>
         <div className="col s12 m8 l8">
           <div>
             <div >
     <h5><b>{element.date} - {element.school}</b></h5>
     <p style={pStyle}>{element.graduation} {element.degree}</p>
             </div>
           </div>
         </div>
       </div>     
     ));
         return cards;
};

export const Experience = () => (
    (aboutme.experiences).map((element, index) => (
         <div className="row" key={index} style={blockStyle}>
         <div className="col s12 m8 l8">
           <div>
             <div>
                <h5><b>{element.date} - {element.society}</b></h5>
                <p style={pStyle}>{element.poste}                
                
            </p>
             </div>
           </div>
         </div>
         <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header={element.poste + " - " + element.society}
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: "10%",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: "4%"
                }}
                trigger={<Button
                     node="button"
                      className="btn pulse"
                      tooltip="En savoir plus"
                      style={experienceButton}
                      >détails</Button>}
                >
                <div>
                    {ReactHtmlParser(element.details)}
                </div>
                </Modal>
       </div>     
     ))
);

export const Competences = () => (
    <div  className="row" style={blockStyle}>
       <div className="col s12 m8 l8 center-align">           
              {(aboutme.skills.languages).map( (lang, index) => (
                  lang.img && lang.level >= 3 ? <span key={index}><img src={lang.img} style={imgStyles} alt={lang.language} /></span> : "" 
              ))}           
      </div>
    </div>
);

export const CompetencesOthers = () => (
    <div style={{ float: "inherit"}, blockStyle}>
    {(aboutme.skills.languages).map( (lang, index) => (
        lang.level < 3 ? <span key={index} style={otherStyle}>{lang.language}</span> : "" 
    ))}
    </div>
);

export const CompetencesTools = () => (    
        <div style={blockStyle}>
            {(aboutme.skills.tools).map( (lang, index) => (          
                lang.img ? <span key={index}><img src={lang.img} style={imgStyles} alt={lang.language} /></span> : ""    
        ))}
        </div>
);

export const Divers = () => (
     <div style={pStyle}>
    {(aboutme.divers).map( (hobby, index) => (
        <p key={index} ><u>{hobby.type}</u>: {Array.isArray(hobby.value) ? hobby.value.join(", ") : typeof hobby.value === "boolean" ? "permis B + véhicule" : "non"}</p>
    ))}
</div>
);