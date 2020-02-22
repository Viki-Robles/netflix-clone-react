import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUSerDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render () {
        const { values, handleChange } =  this.props;
        
        return (
            <div>
              <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Enter your User Details"/>
               <TextField
                hintText="Enter Your first Name"
                floatingLabelText="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}/>

                <TextField
                hintText="Enter Your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}/>

                <TextField
                hintText="Enter Your Email"
                floatingLabelText="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}/>

                <TextField
                hintText="Enter Your Occupation"
                floatingLabelText="Last Name"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}/>

                <TextField
                hintText="Enter Your City"
                floatingLabelText="City"
                onChange={handleChange("city")}
                defaultValue={values.city}/>
            </React.Fragment>
            </MuiThemeProvider>
            </div>
        );
    }
}

