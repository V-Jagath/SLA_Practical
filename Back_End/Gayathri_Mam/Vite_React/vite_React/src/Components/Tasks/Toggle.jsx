import { useState } from "react";

// Create a button that toggles between “ON” and “OFF” using state.

function Toggle({ loginData }) {

    const [show, setShow] = useState(false)

    function toggleBtn() {
        setShow(!show)
    }

    if (show === false) {
        return (
            <>
                <p>User Name is :{loginData.userName}</p>
                <p>Password is :{loginData.password}</p>
                <p>User Age is :{loginData.userAge}</p>
                <button onClick={toggleBtn}>Toggle OFF</button>
            </>
        )

    }
    else {
        return (
            <>
                <p style={{ color: "red" }}>Error</p>
                <button onClick={toggleBtn}>Toggle ON</button>
            </>
        )
    }

};

export default Toggle;
