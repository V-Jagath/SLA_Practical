import Resume from '../ClassTask/Resume'
const Day12Task = () => {

    const directorName: any[] = [
        {
            director: "Lokesh Kanagaraj",
            movies: [
                { title: "Vikram", script: "Lokesh Kanagaraj" },
                { title: "Kaithi", script: "Lokesh Kanagaraj" },
                { title: "Master", script: "Lokesh Kanagaraj" },
            ]
        },

        {
            director: "Mani Ratnam",
            movies: [
                { title: "Ponniyin Selvan 1", script: "Elango Kumaravel" },
                { title: "Ponniyin Selvan 2", script: "Elango Kumaravel" },
                { title: "OK Kanmani", script: "Mani Ratnam" },
            ]
        },

        {
            director: "Shankar",
            movies: [
                { title: "Indian", script: "Shankar" },
                { title: "Indian 2", script: "Shankar" },
                { title: "Anniyan", script: "Shankar" },
            ]
        }
    ];

    return (
        <>
            <h1>Director Name and Movie Name</h1>
            <div style={{ padding: "10px" }}>{directorName.map((e, i) => (
                <>
                    <div style={{ background: "grey" }} key={i}>
                        <div>
                            <h2 style={{ color: "white", background: "black" }}>{e.director}</h2>
                            <h3  >{e.movies.map((movie: any, i: number) => (
                                <>
                                    <p key={i}>{i + 1}.{movie.title}</p>
                                </>
                            ))}</h3>
                        </div>
                    </div>
                </>
            ))}

            </div>
            <Resume />
        </>
    )
};

export default Day12Task;

