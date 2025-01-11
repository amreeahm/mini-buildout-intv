import React from "react";

const Card = (props) =>{
    
    return (
        <div style={{
            display: "flex",
            borderRadius: "5px",
            flexDirection: "column",
            height:"150px",
            width:"173px",
            border:"1px solid grey",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"
        }}>
            <img style={{
                height:"50%",
                width:"50%",
                borderRadius:"3px"
            }} src={props.info.flag} alt={props.info.name}/>
            <h3>{props.info.name}</h3>
        </div>
    )
}

export default Card;