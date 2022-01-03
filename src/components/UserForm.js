import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Proceed to the previous step
    previousStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const  { step } = this.state;
        const {firstname, lastname, email, occupation, city, bio} = this.state;

        const values = {firstname, lastname, email, occupation, city, bio};

        switch(step){
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = {values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetail 
                        nextStep = { this.nextStep }
                        previousStep = { this.previousStep }
                        handleChange = { this.handleChange }
                        values = {values}
                    />
                )
            case 3:
                return (
                    <Confirm 
                        nextStep = { this.nextStep }
                        previousStep = { this.previousStep }
                        values = {values}
                    />
                )            
            case 4:
                return  <Success />
        }
    }
}

export default UserForm
