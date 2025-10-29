import React from 'react';

const SimpleTest = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Simple Test Page</h1>
            <p>If you can see this, React is working fine.</p>
            <p>Current time: {new Date().toLocaleString()}</p>
        </div>
    );
};

export default SimpleTest;