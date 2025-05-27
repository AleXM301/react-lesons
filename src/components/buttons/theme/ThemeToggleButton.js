import {useContext} from 'react';
import './stayle/theme.css';
import {SunIcon} from "./Sun";
import Moon from "./Moon";
import {ThemeContext} from "../../../contexts/ThemeContext";

export default function ThemeToggleSwitch() {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const themeClass = theme === "light" ? "light" : "dark"
    return (
        <div className={`theme-switch ${themeClass}`} onClick={toggleTheme}>
            <div className="icons">
                <span className="moon" style={{height: "25px"}}><Moon/></span>
                <span className="sun" style={{height: "25px"}}> <SunIcon/> </span>
                <div className={`slider ${themeClass}`}></div>
            </div>
        </div>
    );
};