import { useState } from "react"

function Input() {
    const [value, setvalue] = useState("")

    function extract(e) {
        setvalue(e.target.value)
    }
    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={extract} />
            <p>{value}</p>
            <button>Click</button>
        </div>
    )
}

export default Input()