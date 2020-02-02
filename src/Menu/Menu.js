import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { isExpanded: false };
    }




    render() {
        return (
            <di className="Menu">
                <MenuButton/>
                <div className="Menu-links">
                    <div className="Menu-link"><b>Home</b></div>
                    <div className="Menu-link"><b>Series</b></div>
                    <div className="Menu-link"><b>About</b></div>
                    <div className="Menu-link"><b>Contact</b></div>
                </div>
            </di>
        );
    }
}

function MenuButton() {
    return (
        <button className="Menubutton"><b>Menu Button</b></button>
    );
}