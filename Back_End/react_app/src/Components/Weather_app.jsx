
import { useState } from "react";

function Weather_app() {
    const [temp, setTemp] = useState(0);
    const [info, setInfo] = useState(' ');

    const Message = () => {
        if (temp < 30) { setInfo("Cold") }
        else { setInfo("Hot") }
    }

    return (
        <>
            <input type="text" value={temp} onChange={(e) => setTemp(e.target.value)} />
            <button onClick={() => Message()}>check</button>
            <h1> {info} </h1>
        </>
    )

};

export default Weather_app;