import React, {useState} from "react";

function Clock(props) {

    // const now = new Date();
    const getNow = () => new Date();
    const getTime = () => getNow().toLocaleTimeString(props.locale);
    const getDate = () => getNow().toLocaleDateString(props.locale);

    const [currentTime, setCurrentTime] = useState(getTime());
    const [currentDate, setCurrentDate] = useState(getDate());

    setInterval(() => {
        setCurrentTime(getTime());
        setCurrentDate(getDate());
    }, 1000);

    let style = {}
        if (props.color) {
            style["color"] = props.color
        }

    return (
        <div className="clock" style={style}>
            <h2>{currentTime}</h2>
            <p>{currentDate}</p>
        </div>
    )
}

Clock.defaultProps= {
    locale: "en-us"
}

export default Clock;