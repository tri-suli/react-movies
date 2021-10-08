import React from 'react';
import './Layout.style.css';

function Layout ({ children }) {
    return (
        <div className="AppLayout">
            {children}
        </div>
    );
}

export default Layout;
