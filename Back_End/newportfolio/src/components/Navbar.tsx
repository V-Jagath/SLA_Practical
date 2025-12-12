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
        <div className="bg-gray-100 flex justify-between p-4 items-center">

            <div>
                <h1 className="font-bold text-3xl"> {"</>"} Portfolio</h1>
            </div>

            <div className="flex gap-8 items-center">
                {Navitems.map((e) => (
                    <a key={e.id} className="font-bold text-lg text-center hover:bg-gray-700 hover:text-white p-1 rounded" href="">{e.label}</a>
                ))}
            </div>

        </div >
    </>)
};

export default Navbar;

