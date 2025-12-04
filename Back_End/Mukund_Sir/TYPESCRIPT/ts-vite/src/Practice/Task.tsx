const Task = () => {

    let count: number = 0;

    const Increment = () => {
        const result: number = count + 1
        return result
    }


    return (
        <>
            <button onClick={Increment}>Increment</button>

        </>
    )
}

export default Task;
