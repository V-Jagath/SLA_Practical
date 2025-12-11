const Navbar = () => {

    const Navitems = [
        { id: 1, label: "Home" },
        { id: 2, label: "Skills" },
        { id: 3, label: "Projects" },
        { id: 4, label: "Education" },
        { id: 5, label: "Certificates" },
        { id: 6, label: "Contact" },
    ];

    return (<>
        <div className="bg-transparent flex justify-between">
            <div>
                <h1>Portfolio</h1>
            </div>
            <div>
                {Navitems.map((e) => (
                    <a className="" href="">{e.label}</a>
                ))}
            </div>
        </div>
    </>)
};

export default Navbar;

