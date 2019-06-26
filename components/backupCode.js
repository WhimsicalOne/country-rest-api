import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import Country from "./country";

const filterCountries = (array, place) => {
    const filteredList = [];
    if (place) {
        let regionBase = array.filter(country => {
            return country.region === place;
        });
        filteredList.push(regionBase);
    }
    filteredList.map(country => {
        return (
            <Country
                i_key={country.numericCode}
                name={country.name}
                flag={country.flag}
                population={country.population}
                region={country.region}
                capital={country.capital}
            />
        );
    });
};

const Filter = () => {
    const [loading, countries] = useContext(CountryContext);

    const regions = [];
    if (countries === null) {
        return "Loading....";
    } else {
        countries.forEach(element => {
            regions.push(element.region);
        });
        let x = names => names.filter((v, i) => names.indexOf(v) === i);
        const shortlist = x(regions);
        return (
            <div className='filter'>
                <button className='filter-button'>Choose Region</button>
                <div className='filter-content'>
                    {shortlist.map(region => (
                        <span onClick={e => filterCountries(countries, region)}>
                            {region}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
};

export default Filter;
