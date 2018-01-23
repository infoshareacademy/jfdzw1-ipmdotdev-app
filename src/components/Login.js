import React, {Component} from "react";

import {Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap"


export const formInstance = (
    <Form inline>
        <FormGroup controlId="formInlineName">
            <ControlLabel>Login</ControlLabel>{' '}
            <FormControl type="text" placeholder="Wpisz Login" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel>Hasło</ControlLabel>{' '}
            <FormControl type="password" placeholder="********" />
        </FormGroup>{' '}
        <Button type="submit">Zaloguj</Button>
    </Form>
);

//render(formInstance);


