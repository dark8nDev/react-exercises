import React from "react";

function TextInput({ text, changeText }) {
    return (
        <>
            <label>Texto:</label>
            <input
                type='text'
                placeholder="Inserte texto..."
                value={text}
                onChange={(e) => changeText(e.target.value)}
            />
        </>
    );
}

export { TextInput }