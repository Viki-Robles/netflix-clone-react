import React from 'react';
import './ToolBar.css';
import '../SideDrawer/DrawerToggleButton'
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
                            <li><br/>About</li>
                            <li><br/>Series</li>
                            <li><br/>Contact</li>
                            <li><br/>Sign Up</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}