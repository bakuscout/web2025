import React, {useState} from "react";

function ColorPicker (props) {

    function handleChange(event) {
        const color = event.target.value;
        props.onChange(color)
    }
    return (
        <p> <input type="color" onChange={handleChange}/> &nbsp; Choose a color.</p>
    )
}

export default ColorPicker;