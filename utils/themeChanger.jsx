import React, { useContext } from "react";
import { ThemeContext } from "../context/CountryContext";

const ThemeChanger = () => {
    const [theme, alterTheme] = useContext(ThemeContext);
    function themeChange() {
        if (theme) {
            // changeStuff
        } else {
            // dontCHangeStuff
            console.log(alterTheme);
        }
    }
    return <button onClick={() => themeChange()}>Dark Mode</button>;
};

export default ThemeChanger;
