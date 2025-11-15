import { useState } from "react";

const Count = function () {

    const [count, setCount] = useState(0)

    // function Value() {
    //     setCount(count + 1)
    // };

    function decValue() {
        setCount(count - 1)
    }

    function Reset() {
        setCount(0)
    }
    return (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={decValue}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Count;