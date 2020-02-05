import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { isExpanded: false };
    }

toggleState() {
    this.setState({ isExpanded: !this.state.isExpanded });
}


    render() {
        let {isExpanded} = this.state;
        return (
            <div className="Menu">
                <MenuButton 
                isExpanded={isExpanded}
                onButtonClicked={() => this.toggleState()} />
                <div className={`Menu-links ${this.state.isExpanded ? "is-expanded": ""}`}>
                    <div className="Menu-link"><b>Home</b></div>
                    <div className="Menu-link"><b>Series</b></div>
                    <div className="Menu-link"><b>About</b></div>
                    <div className="Menu-link"><b>Contact</b></div>
                </div>
            </div>
        );
    }
}

function MenuButton({ isExpanded, onButtonClicked }) {
    return (
        <button 
            onClick={() => onButtonClicked()}
            className="MenuButton">
            Menu {isExpanded}
        </button>
    );
}

/**? "Yes": "No" */