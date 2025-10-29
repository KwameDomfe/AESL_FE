import React from 'react';
import { useTheme } from '../hooks/useContextHooks';


const MinimalContextTest = () => {
    console.log('MinimalContextTest rendered');
    const { theme, toggleTheme } = useTheme();
    return (
        <div style={{ padding: '20px' }}>
            <h1>Minimal Context Test</h1>
            <p>Current theme: <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <p>✅ Theme context is working!</p>
        </div>
    );
};

export default MinimalContextTest;