
import { useState } from 'react';

const Conditinal_rendering = () => {

    const [login, setlogin] = useState(false);

    return (
        <>
            {login ? <h1>welcome</h1> : <h1>Please signin</h1>}
        </>
    )
}

export default Conditinal_rendering;