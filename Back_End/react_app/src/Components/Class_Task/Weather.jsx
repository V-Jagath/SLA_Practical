
function Weather({ climate }) {

    
    return (
        <p>{climate.place} weather is {climate.temp}</p>
    );

};

export default Weather;