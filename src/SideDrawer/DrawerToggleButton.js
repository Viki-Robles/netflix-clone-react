import React from 'react';
import './DrawerToggleButton.css';

export default function DrawerToggleButton() {
    return (
        <div>
            <button className="toogle_button">
                <div className="toogle_button_line"></div>
                <div className="toogle_button_line"></div>
                <div className="toogle_button_line"></div>
            </button>
        </div>
    );
}