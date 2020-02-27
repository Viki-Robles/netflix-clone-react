import React from 'react';
import './ToolBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';



const ToolBar = props => {
    return (
        <div>
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li>About</li>
                            <li>Series</li>
                            <li><a href="#section2">Contact</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default ToolBar;