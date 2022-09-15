import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class Confirmation extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
        document.getElementById('statusMsg').innerHTML("Your request has been posted successfully!");
    };

    render(){
        const {inputValues: { firstName, lastName, email, address, city, state, zip }} = this.props;

        return(
            <Container>
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary" onClick={this.saveAndContinue}>Confirm</Button>
            </Container>
        )
    }
}

export default Confirmation;