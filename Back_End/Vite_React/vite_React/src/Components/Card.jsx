import Blood from '../assets/Blood-Donation.jpeg'

function Card({ Project }) {

    return (
        <>
            <img src={Project.image} width="200" height="200" />
            <h2>{Project.cardTitle}</h2>
            <p>{Project.cardBody}</p>
            <p>{Project.cardDiscription}</p>
        </>
    );


};


Card.defaultProps = {
    cardDiscription: "Hello i am jagath",
    image: Blood
}


export default Card;