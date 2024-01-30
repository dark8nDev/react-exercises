import React from "react";
import './CharacterProfile.css'

function CharacterProfile(props) {
    return (
        <div className="profile">
            <h2>{props.name}</h2>
            <p>Species: {props.species}</p>
            <p>Status: {props.status}</p>
            <img src={props.image} alt={`The following is the character ${props.name}`} />
        </div>
    );
}

export { CharacterProfile }