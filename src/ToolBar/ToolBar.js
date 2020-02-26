import React from 'react';

import './ToolBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

export default function ToolBar() {
    return (
        <div>
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div>
                    <DrawerToggleButton/>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li>About</li>
                            <li>Series</li>
                            <li>Contact</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}