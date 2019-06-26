import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import Country from "./country";

const Filter = () => {
    let [loading, countries, regions, selected] = useContext(CountryContext);
    function regionSelection(currentRegion, newRegion) {
        if (currentRegion.innerHTML === "Choose Region") {
            currentRegion.innerHTML = newRegion;
            selected = newRegion;
            if (selected) {
                const filtered = countries.filter(c => c.region === selected);
                console.log(filtered);
                return filtered.map(c => (
                    <Country
                        key={c.numericCode}
                        name={c.name}
                        flag={c.flag}
                        population={c.population}
                        region={c.region}
                        capital={c.capital}
                    />
                ));
            }
        } else {
            currentRegion.innerHTML = newRegion;
        }
    }
    if (countries === null) {
        return "Loading...";
    } else {
        return (
            <div className="filter">
                <button className="filter-button">Choose Region</button>
                <div className="filter-content">
                    <span
                        onClick={() =>
                            regionSelection(
                                document.getElementsByClassName(
                                    "filter-button"
                                )[0],
                                "Asia"
                            )
                        }
                    >
                        Asia
                    </span>
                </div>
            </div>
        );
    }
};

export default Filter;
