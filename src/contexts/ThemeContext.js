import {createContext, useState, useEffect, useCallback, useMemo} from "react";
import {getFromStorage, setToStorage, STORAGE_KEYS} from "../utils/LocalStorageUtils";

export const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {

    const localTheme = getFromStorage(STORAGE_KEYS.THEME, "light");
    const [theme, setTheme] = useState(localTheme);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }, []);

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme, toggleTheme]);

    useEffect(() => {
        setToStorage(STORAGE_KEYS.THEME, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};