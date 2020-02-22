
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';



export class UserForm extends Component {
    constructor(){
        super();
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            occupation: '',

            
        }
    }

    // Proceed to the next step

    nextStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step + 1
        })
    }

     // Proceed to the previous step

     prevStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step - 1
        })
    }

    // hnadle fields change

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, city, 
            occupation} = this.state;
            const values = { firstName, lastName, email, city, 
                occupation }

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.hendleChange}
                    values={values}
                    />
                )

            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                 return <h1>Success</h1>
        }
           
    }
    
}
   

export default UserForm;
