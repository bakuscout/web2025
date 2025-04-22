import React, {useState} from "react";

function NameGen () {
    const adjectives = ["strong", "tired", "annoyed", "playful"]
    const colors = ["puke green", "mauve", "gold", "copper"]
    const nouns = ["house", "dragon", "fire", "ocean"]

    const generateName = () => {
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];

        return `${adj} ${color} ${noun}`
    }
    const [currentName, setCurrentName] = useState(generateName());
    
    return (
        <div>
            <h1>{currentName}</h1>
            <button onClick={() => setCurrentName(generateName())}>Make a name</button>
        </div>
    )
}

export default NameGen;