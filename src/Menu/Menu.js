import React from 'react';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state={ isExpanded: false};
    }




    render() {
        return(
            <di className="Menu">
                <div className="Menu-links">
                    <div className="Menu-link">Home</div>
                    <div className="Menu-link">Series</div>
                    <div className="Menu-link">About</div>
                    <div className="Menu-link">Contact</div>
                </div>
            </di>
        );
    }
}