import { useState } from "react";

function Form() {
    const [Name, setName] = useState("");

    const fromFunction = function (e) {
        e.preventDefault();
        console.log(`Name is :${Name}`)
        setName("")
    }
    return (
        <>
            <form onSubmit={fromFunction}>
                <label>Name :</label>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" >Submit</button>

            </form >
        </>
    );

}

export default Form;
