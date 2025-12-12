const Banner = () => {

    const role: string[] = ["Front End", "Web", "MERN"]

    return (<>
        <div>
            <li>Available for opportunities</li>
            <div>
                <h1 className="text-5xl font-bold">Hi, I'm </h1>
                <h1 className="text-5xl text-blue-800 font-extrabold">{role[0]} <span className="text-black">Developer</span></h1>
                <h3>A passionate developer creating beautiful, functional web experiences with modern technologies and clean design principles.</h3>
            </div>

            <div>
                <div>
                    <button></button>
                    <button></button>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>

        </div>
    </>)
};

export default Banner;
