function Car() {
    const cars = ["bmw", "tesla", "tata"];
    let list = [];

    // FOR OF METHOD
    for (let car of cars) {
        list.push(<li >{car}</li>);
    }

    //Object.entries --> Object to Array of Array 

    // let objcars = {
    //     name: "tata",
    //     model: 2025,
    //     petrol: true
    // }
    // let arrcar = Object.entries(objcars)
    // console.log(arrcar)
    return (
        <>
            <div>
                <h2>Car Models</h2>
                {list}
                {/* {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))} */}
            </div>
        </>
    );
}
export default Car;