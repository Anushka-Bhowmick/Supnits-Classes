import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ThemeProvider from './ThemeProvider'; 

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            {(toggleDarkMode, darkMode) => <App toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


