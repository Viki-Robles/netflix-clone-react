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
                <form onSumbit={() => this.handleSubmit()}>
                    <div>
                        <input
                            name="firstName"
                            placeholder="firstName"
                            value={this.state.firstName}
                            onChange={() => this.handleChange()}

                        />
                    </div>

                    <div>
                        <input
                            name="lastName"
                            placeholder="lastName"
                            value={this.state.lastName}
                            onChange={() => this.handleChange()}

                        />
                    </div>

                    <div>
                        <input
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={() => this.handleChange()}

                        />
                    </div>

                    <div>
                        <input
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={() => this.handleChange()}

                        />
                    </div>




                </form>

            </div>
        );
    }
}