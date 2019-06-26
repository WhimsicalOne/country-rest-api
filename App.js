import React, { Component } from "react";
import "./App.css";
import Countries from "./components/countries.jsx";
import SearchIcon from "./images/search.svg";
import { CountryProvider } from "./context/CountryContext";
import Filter from "./components/filter";
import Navigation from "./components/navigation.jsx";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="search-and-filter">
                    <div className="search-wrap">
                        <div className="inner-wrap">
                            <img src={SearchIcon} alt="search-icon" />
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search for a country..."
                            />
                        </div>
                    </div>
                    <div className="filter-wrap">
                        <CountryProvider>
                            <Filter selectedRegion={this.props.children} />
                        </CountryProvider>
                    </div>
                </div>
                <div className="country-section">
                    <div className="countries">
                        <CountryProvider>
                            <Countries />
                        </CountryProvider>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
