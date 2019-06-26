import React, { useState, useEffect, createContext } from "react";

// const CountryContext
export const CountryContext = createContext();

export const CountryProvider = props => {
    const url = "https://restcountries.eu/rest/v2/all";
    const [countries, setCountries] = useState({
        loading: false,
        country: [],
        regions: [],
        regionSelect: ""
    });
    useEffect(() => {
        fetch(url)
            .then(results => results.json())
            .then(data => {
                setCountries({
                    loading: true,
                    country: data,
                    regions: [],
                    regionSelect: ""
                });
            });
    }, []);
    const { loading, country, regions, regionSelect } = countries;
    let x = names => names.filter((v, i) => names.indexOf(v) === i);
    const regionList = x(regions);
    // const filtered = selectedRegions
    //     ? countrySelection.filter(m => m.name === regionList.name)
    //     : countrySelection;
    // Then just pass this information down.
    const filtered = regionSelect
        ? country.filter(c => c.region === regionSelect)
        : country;
    return (
        <CountryContext.Provider
            value={[loading, filtered, regionList, regionSelect]}
        >
            {props.children}
        </CountryContext.Provider>
    );
};
export const ThemeContext = createContext();

export const ThemeProvider = props => {
    const [theme, setTheme] = useState({
        theme: false
    });

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};
