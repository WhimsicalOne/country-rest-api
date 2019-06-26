import React from "react";

const Country = ({ i_key, flag, name, population, region, capital }) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="country" key={i_key}>
            <img src={flag} alt={name} />
            <div className="information">
                <h2>{name}</h2>
                <p>
                    <span>Population: </span>
                    {numberWithCommas(population)}
                </p>
                <p>
                    <span>Region: </span>
                    {region}
                </p>
                <p>
                    <span>Capital: </span>
                    {capital}
                </p>
            </div>
        </div>
    );
};

export default Country;
