import React from "react";
import { Icon, Button, Modal } from "react-materialize";
import data from "../data/me.json";

const imgStyles = {
    height : "100px",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "3%"
};

export const Formation = () => {
     let cards = (data.formation).map((element, index) => (
         <div className="row" key={index}>
         <div className="col s12 m6">
           <div className={"card red darken-4"}>
             <div className="card-content white-text">
     <span className="card-title">{element.date} - {element.school}</span>
     <p>{element.graduation} {element.degree}</p>
             </div>
           </div>
         </div>
       </div>     
     ));
         return cards;
     }

export const Experience = () => (
    (data.experiences).map((element, index) => (
         <div className="row" key={index}>
         <div className="col s12 m6">
           <div className={"card " + element.color + " darken-4"}>
             <div className="card-content white-text">
                <span className="card-title">{element.date} - {element.society}</span>
                <p>{element.poste}                
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
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={<Button
                     node="button"
                      className="btn-floating pulse"
                      icon={<Icon>more_horiz</Icon>}
                      tooltip="En savoir plus"
                      style={{ float: "right", backgroundColor: "#039be5 ", bottom: "10px"}}
                      ></Button>}
                >
                <p>
                    {element.details}
                </p>
                </Modal>
            </p>
             </div>
           </div>
         </div>
       </div>     
     ))
);

export const Competences = () => (
    <div style={{ textAlign: 'center'}}>
    {(data.skills.languages).map( (lang, index) => (
        lang.img && lang.level >= 3 ? <span key={index}><img src={"assets/icons/"+lang.img} style={imgStyles} alt={lang.language} /></span> : "" 
    ))}
    </div>
);

export const CompetencesOthers = () => (
    <div style={{ float: "inherit"}}>
    {(data.skills.languages).map( (lang, index) => (
        lang.level < 3 ? <span key={index} style={{ margin: "1%", fontWeight: 'bold'}}>{lang.language}</span> : "" 
    ))}
    </div>
);

export const CompetencesTools = () => (    
        <div style={{ textAlign: 'center'}}>
            {(data.skills.tools).map( (lang, index) => (          
                lang.img ? <span key={index}><img src={"assets/icons/"+lang.img} style={imgStyles} alt={lang.language} /></span> : ""    
        ))}
        </div>
);
