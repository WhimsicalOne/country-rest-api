import React, { useContext } from "react";
import Country from "./country";
import { CountryContext } from "../context/CountryContext";

const Countries = () => {
    const [loading, countries] = useContext(CountryContext);
    if (countries === null) {
        return "Loading....";
    } else {
        console.log(countries);
        return countries.map(country => (
            <Country
                key={country.numericCode}
                name={country.name}
                flag={country.flag}
                population={country.population}
                region={country.region}
                capital={country.capital}
            />
        ));
    }
};

export default Countries;
