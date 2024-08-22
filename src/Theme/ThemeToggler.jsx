import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Ganti Tema (Saat ini: {theme})
        </button>
    );
}

export default ThemeToggler;
