import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

import styles from './style/Contacts.module.css';

export default function Contacts() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`
        ${styles[`contacts-container`]} 
        ${styles[`mode-${theme}`]}`}>
            <h1>Contacts</h1>
            <p>Name: Misha</p>
            <p>Tel: +083 849 6346</p>
            <p>Email: placeholder@example.com</p>
        </div>
    )
}