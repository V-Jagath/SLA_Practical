function Table({ tableData }) {

    const keys = Object.keys(tableData[0])

    return (
        <table style={{ border: "2" }}>
            <thead>
                <tr>
                    {keys.map((e, i) => (
                        <th key={i}>{e}</th>))}
                </tr>
            </thead>

            <tbody>
                {tableData.map((tableData, index) => (
                    <tr key={index}>
                        <td>{tableData.rollNo}</td>
                        <td>{tableData.Name}</td>
                        <td>{tableData.Grade}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
};

export default Table;
