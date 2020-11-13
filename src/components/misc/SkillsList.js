import React from "react";
import { Button, Modal } from "react-materialize";
import ReactHtmlParser from "react-html-parser";
import data from "../data/me.json";

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

const imgStyles = {
    height : "100px",
    marginRight: "5%",
    marginBottom: "3%"
};

const pStyle = {
  fontSize: "1.3em"
};

export const Formation = () => {
     let cards = (data.formation).map((element, index) => (
         <div className="row" key={index} style={{borderBottom: "1px solid black"}}>
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
    (data.experiences).map((element, index) => (
         <div className="row" key={index} style={{borderBottom: "1px solid black"}}>
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
                      style={{ float: "right", backgroundColor: "#039be5 ", right: "2%", marginTop: "2%"}}
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
    <div  className="row" style={{ borderBottom: "1px solid black"}}>
       <div className="col s12 m8 l8 center-align">           
              {(data.skills.languages).map( (lang, index) => (
                  lang.img && lang.level >= 3 ? <span key={index}><img src={"assets/icons/"+lang.img} style={imgStyles} alt={lang.language} /></span> : "" 
              ))}           
      </div>
    </div>
);

export const CompetencesOthers = () => (
    <div style={{ float: "inherit", borderBottom: "1px solid black"}}>
    {(data.skills.languages).map( (lang, index) => (
        lang.level < 3 ? <span key={index} style={{ margin: "1%", fontWeight: "bold"}}>{lang.language}</span> : "" 
    ))}
    </div>
);

export const CompetencesTools = () => (    
        <div style={{ borderBottom: "1px solid black"}}>
            {(data.skills.tools).map( (lang, index) => (          
                lang.img ? <span key={index}><img src={"assets/icons/"+lang.img} style={imgStyles} alt={lang.language} /></span> : ""    
        ))}
        </div>
);

export const Divers = () => (
     <div style={pStyle}>
    {(data.divers).map( (hobby, index) => (
        <p key={index} ><u>{hobby.type}</u>: {Array.isArray(hobby.value) ? hobby.value.join(", ") : typeof hobby.value === "boolean" ? "permis B + véhicule" : "non"}</p>
    ))}
</div>
);