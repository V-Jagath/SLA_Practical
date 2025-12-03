import { useState } from "react"

function Attendance() {
    const [state, setState] = useState(true)

    function Atten(event) {
        setState(!state)
        if (state === true) {
            event.target.textContent = "Absent"
        }
        else {
            event.target.textContent = "Present"
        }
    }
    return (
        <>
            <button onClick={(event) => Atten(event)}>Present</button>
        </>
    );
}
export default Attendance;