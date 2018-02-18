import React from "react";
import { Radio, FormControl, FormGroup, ControlLabel, Button, HelpBlock } from "react-bootstrap"

const SignUp = () => {
    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }
    const formInstance = (
        <form>
            <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
            />
            <FieldGroup id="formControlsPassword" label="Password" type="password" />
            <FieldGroup id="formControlsPassword" label="Confirm Password" type="password" />

            <FormGroup>
                <Radio name="radioGroup" inline>
                    female
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                    male
                </Radio>{' '}
                <FieldGroup id="age" label="age" type="number" />
                <FieldGroup id="country" label="Country" type="string" />
                <FieldGroup id="city" label="City" type="string" />
                <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Challenge</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        <option value="select">zjedz snickersa</option>
                        <option value="other">zrób 100 pompek</option>
                        <option value="other">zarób 100 $</option>
                        <option value="other">napisz test na 100%</option>
                    </FormControl>
                </FormGroup>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </form>
    );
   return formInstance;
};
export {SignUp};