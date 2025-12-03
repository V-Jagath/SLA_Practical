import { useState } from "react"

function Weather() {
    const [temp, setTemp] = useState();
    const [mes, setMes] = useState(" ");

    const Message = () => {

        if (temp > 120) {
            alert("Invalid Temp")
        }
        else if (temp > 60) {
            setMes(`Temp is ${temp} is very Hot Climate `)
        }
        else if (temp > 30) {
            setMes(`Temp is ${temp} is Hot Climate `)
        }
        else {
            setMes(`Temp is ${temp} is cold`)
        }
    };
    return (
        <>
            <input type="number" value={temp} onChange={(event) => { setTemp(event.target.value) }} />
            <button onClick={() => Message()}>Check Weather</button>
            <p>{mes}</p>
        </>
    )
};

export default Weather;