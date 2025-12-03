function Company({ Data }) {
    return (
        <>
            <div>
                {Data.map((e, index) => (
                    <div key={index} style={{ backgroundColor: "black", color: "red", width: "50%", height: "50%", textAlign: "center" }}>{e.name}</div>
                )
                )}
            </div>
        </>
    );
}
export default Company;