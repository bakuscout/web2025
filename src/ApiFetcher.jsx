import { useState } from "react";
import "./ApiFetcher.css";

function ApiFetcher () {
    const url = "http://httpbin.org/uuid";
    const [result, setResult] = useState("");
    const [buttonText, setButtonText] = useState("Get UUID")

    function sendRequest (event) {
        const request = new Request(url); //constructs http request
        fetch(request)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setResult(json);

                setButtonText("Get Another UUID");
                setResult(json.uuid);
            });
    };

    return (
        <div className="Fetcher">
            <h1>API Fetcher</h1>
            <button id="get" onClick={sendRequest}>{buttonText}</button>
            {result && <p>Here's a UUID: {result}</p>}
        </div>
    );
}

export default ApiFetcher;