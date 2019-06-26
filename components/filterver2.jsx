import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import Country from "./country";

const filterVer2 = props => {
    const [countries] = useContext(CountryContext);
    console.log(countries);
    return <p>Hello World!</p>;
};

export default filterVer2;
