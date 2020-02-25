import React from 'react';
import './Menu.css';
import { Link, Redirect } from 'react-router-dom';



export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { isExpanded: false };
    }

    toggleState() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }


    render() {
        let { isExpanded } = this.state;
        return (
            <div>
                <div className="Menu">
                    <MenuButton
                        isExpanded={isExpanded}
                        onButtonClicked={() => this.toggleState()} />
                    <div className={`Menu-links ${this.state.isExpanded ? "" : "is-expanded"}`}>
                        <div className="Menu-link"><b>Home</b></div>
                        <div className="Menu-link"><b>Series</b></div>
                        <div className="Menu-link"><b>About</b></div>
                        <div className="Menu-link"><b>Contact</b></div>
                        <Link to={'/signup'}
                            className="Menu-link"><b>Sign Up</b></Link>
                    </div>
                </div>
                <div>
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

/**
 * <a href="#section2"><b>Contact</b></a>
                        </div>
 */