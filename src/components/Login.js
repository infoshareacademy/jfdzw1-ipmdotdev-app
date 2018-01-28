import React, {Component} from "react";

import {Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap"
import reducer from "../reducers/index";
import {connect} from "react-redux"


const Login =(props) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(props)
        props.signIn("kot")
    };

    return (
        <form inline onSubmit={handleSubmit}>
            <FormGroup controlId="formInlineName">
                <ControlLabel> Login</ControlLabel>{' '}
                <FormControl type="text" placeholder="Wpisz Login" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
                <ControlLabel>haslo</ControlLabel>{' '}
                <FormControl type="password" placeholder="********" />
            </FormGroup>{' '}
            <Button type="submit">Zaloguj</Button>
        </form>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (name) => dispatch({
            type: "SIGN_IN",
            name
        })
    }
};

const connectLogin = connect(null, mapDispatchToProps)(Login);

export { connectLogin as Login}





