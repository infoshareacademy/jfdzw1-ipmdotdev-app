import React from "react";
import {Radio, FormControl, FormGroup, ControlLabel, Button, HelpBlock} from "react-bootstrap"


const SignUp = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const registerInput = {
            login: this.login.value,
            password: this.password.value,
            name: this.name.value,
            email: this.email.value,
            gender: this.gender.value,
            localization: {
                country: this.country.value,
                city: this.city.value
            },
            age: this.age.value,
            textarea: this.textarea.value,
            avatar: this.avatar.value
        };

        registerUser(registerInput);


    }

    const registerUser = registerInput => {

        fetch("http://api.isa-jfdzw1.vipserv.org/ipmdev/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerInput)
        })

    };

    function FieldGroup({id, label, help, ...props}) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

    const formInstance = (
        <form onSubmit={handleSubmit}>

            <FieldGroup id="formControlsLogin" label="Login" type="text" inputRef={input => {
                this.login = input;
            }}/>

            <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
                inputRef={input => {
                    this.email = input;
                }}
            />
            <FieldGroup id="formControlsPassword" label="Password" type="password" inputRef={input => {
                this.password = input;
            }}/>

            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Płeć</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="Wybierz płeć"
                    inputRef={input => {
                        this.gender = input;
                    }}
                >
                    <option value="male">Mężczyzna</option>
                    <option value="female">Kobieta</option>
                </FormControl>
            </FormGroup>

            <FieldGroup id="country" label="Country" type="string" inline inputRef={input => {
                this.country = input;
            }}/>
            <FieldGroup id="city" label="City" type="string" inline inputRef={input => {
                this.city = input;
            }}/>
            <FieldGroup id="age" label="age" type="number" inline inputRef={input => {
                this.age = input;
            }}/>
            <FormGroup controlId="formControlsTextarea" label="textarea" type="text">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" inline inputRef={input => {
                    this.textarea = input;
                }}/>
            </FormGroup>

            <FieldGroup id="avatar" label="avatar" type="string" inline inputRef={input => {
                this.avatar = input;
            }}/>
            <FieldGroup id="name" label="name" type="string" inline inputRef={input => {
                this.name = input;
            }}/>
            <Button type="submit">Submit</Button>
        </form>
    );
    return formInstance;

};
;
export {SignUp};