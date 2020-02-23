import React, { Component } from 'react';

export default class ValidationForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',


    };

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckBox
                ? event.target.checked
                : event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <form onSumbit={this.handleSubmit}>
                    <div>
                        <input
                            name="First Name"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="Last Name"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                </form>
            </div>
        );
    }
}