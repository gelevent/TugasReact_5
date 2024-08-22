import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
    const { theme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        textAlign: 'center',
        height: '100vh'
    };

    return (
        <div style={style}>
            Tema saat ini: {theme}
        </div>
    );
}

export default ThemedComponent;
