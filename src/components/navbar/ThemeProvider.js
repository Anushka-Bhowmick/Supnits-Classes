import React, { useState } from 'react';
import './dark-mode.css'; 

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
        
    };

    return (
        <div className={`theme-provider ${darkMode ? 'dark-mode' : ''}`}>
            {children(toggleDarkMode, darkMode)}
        </div>
    );
};

export default ThemeProvider;