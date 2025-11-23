import { useState } from "react";

function Input() {

    const [text, setText] = useState("")

    function valueFetch(e) {
        setText(e.target.value)


    }
    return (

        <div>
            <input type="text" onChange={valueFetch} />
            <p>{text}</p>
        </div>
    )
}

export default Input;
