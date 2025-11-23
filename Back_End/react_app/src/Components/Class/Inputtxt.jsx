import { useState } from "react"

function Inputtxt() {
    const [value1, setvalue] = useState("")

    function extract(e) {
        setvalue(e.target.value)
    }
    return (
        <>
            <input type="text" onChange={extract} />
            <p>{value1}</p>
        </>
    )
}

export default Inputtxt()