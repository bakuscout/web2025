import React, {useState} from "react";
import "./FavoriteColor.css"

// saves stuff to local storage
function saveFavColor (color) {
    window.localStorage.setItem("fav-color", color)
}

// returns favorite color
function getFavColor () {
    return window.localStorage.getItem("fav-color")
}

function FavoriteColor() {

    const [favColor, setFavColor] = useState(getFavColor());

    function handleChange (event) {
        const color = event.target.value;
        setFavColor(color);
        saveFavColor(color); //calls save color function
    }

    const style = favColor ? {backgroundColor: favColor} : {}

    return (
        <div className="fav-color" style={style}>
            { favColor && <h2>{favColor}</h2>}
            <p>
                <input type="color" onChange={handleChange}/> <br/>
                Choose your favorite color.
            </p>
        </div>
    )
}

export default FavoriteColor;