import React from "react";
import { TextInput } from "./TextInput";

function TextPanel() {
    
    const [messageOne, setMessageOne] = React.useState("")
    const [messageTwo, setMessageTwo] = React.useState("")

    const handleTextOne = (text) => {
        setMessageOne(text)
    }

    const handleTextTwo = (text) => {
        setMessageTwo(text)
    }

    return (
        <>
            <TextInput
                text={messageOne}
                changeText={handleTextOne}
            />
            <TextInput
                text={messageTwo}
                changeText={handleTextTwo}
            />

            <textarea value={`${messageOne} ${messageTwo}`} />
        </>
    );
}

export { TextPanel }