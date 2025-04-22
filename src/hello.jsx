import React from "react";
import "./Hello.css"

function Hello() {

    const now = new Date();
    return (
        <div>
            <h3 className="hello">
                Hello World,
                It's {now.toDateString()}
            </h3>
        </div>
    );
}

export default Hello;