const Day11 = () => {


    const projectTitle = "HR"
    const location = "Chennai"
    const company = "TCS"

    const isActive = false;

    const number = 2
    const year = 2025

    return (
        <>
            <p>My project name is{projectTitle}This is very effactive so we will doing
                project by{company} location :{location} year -{year}
            </p>

            {isActive ? <h1>TRUE</h1> : "FALSE"}

            {/* Optional Rendering */}

            {isActive && "TRUE"}

            {number === 2 ? "even" : "odd"}

            <p> The Boy Name is {boyName}. that boy location is {location}.one day that boy going friends to {shopName} the ownername is {ownerName}.my friend is
            </p>

        </>
    )
}

export default Day11;
