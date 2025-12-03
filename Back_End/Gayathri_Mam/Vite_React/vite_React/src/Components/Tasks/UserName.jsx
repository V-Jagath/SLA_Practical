//1. Display a username passed as a prop.

function UserName({ loginData }) {
    return (
        <>
            <div>
                <p>{loginData.userName}</p>
                <p>{loginData.password}</p>
                <p>{loginData.userAge}</p>
            </div>
        </>
    );
};

export default UserName;
