import React from "react";
import ThemeChanger from "../utils/themeChanger";
import { ThemeProvider } from "../context/CountryContext";

const Navigation = () => {
    return (
        <header className='navigation'>
            <h1 className='nav-header'>Where in the world!</h1>
            <ThemeProvider>
                <ThemeChanger />
            </ThemeProvider>
        </header>
    );
};
export default Navigation;
