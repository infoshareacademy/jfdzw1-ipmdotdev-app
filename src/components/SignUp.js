import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Col,
  Row,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  HelpBlock
} from "react-bootstrap";

class SignUp extends React.Component {
  handleSubmit = e => {
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

    this.props.registerUser(registerInput, this.props.history);
  };

  render() {
    const FieldGroup = ({ id, label, help, ...props }) => {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    };
    const signUpForm = (
      <div>
        {this.props.hasError && (
          <p>Wystąpił błąd podczas rejestracji. Spróbuj ponownie!</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsLogin"
            label="Login"
            type="text"
            placeholder="Podaj login"
            inputRef={input => {
              this.login = input;
            }}
          />

          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email"
            placeholder="Podaj adres email"
            inputRef={input => {
              this.email = input;
            }}
          />

          <FieldGroup
            id="name"
            label="Imię"
            type="string"
            placeholder="Jak masz na imię?"
            inputRef={input => {
              this.name = input;
            }}
          />
          <FieldGroup
            id="formControlsPassword"
            label="Hasło"
            type="password"
            placeholder="Podaj hasło"
            inputRef={input => {
              this.password = input;
            }}
          />

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

          <FieldGroup
            id="country"
            label="Kraj"
            type="string"
            placeholder="Podaj kraj, w którym mieszkasz"
            inputRef={input => {
              this.country = input;
            }}
          />
          <FieldGroup
            id="city"
            label="Miasto"
            type="string"
            placeholder="Podaj miasto, w którym mieszkasz"
            inputRef={input => {
              this.city = input;
            }}
          />
          <FieldGroup
            id="age"
            label="Wiek"
            type="number"
            placeholder="Podaj swój wiek"
            inputRef={input => {
              this.age = input;
            }}
          />
          <FormGroup controlId="formControlsTextarea" label="Opis" type="text">
            <ControlLabel>Opis</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Napisz kilka słów o sobie"
              inputRef={input => {
                this.textarea = input;
              }}
            />
          </FormGroup>

          <FieldGroup
            id="avatar"
            label="Zdjęcie"
            type="string"
            placeholder="Podaj URL do swojego avatara"
            inputRef={input => {
              this.avatar = input;
            }}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          {this.props.withSuccess ? (
            <p className="text-center">
              Rejestracja się powiodła! Czas się zalogować!
            </p>
          ) : (
            signUpForm
          )}
        </Col>
      </Row>
    );
  }
}

const registerUser = (registerInput, history) => {
  return dispatch => {
    dispatch({ type: "SIGNUP_PENDING" });
    fetch("http://api.isa-jfdzw1.vipserv.org/ipmdev/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerInput)
    })
      .then(rsp => rsp.json())
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
        setTimeout(() => history.push("/signin"), 1500);
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR" });
      });
  };
};

const mapStateToProps = state => {
  return {
    hasError: state.signUpData.hasError,
    withSuccess: state.signUpData.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (registerInput, history) =>
      dispatch(registerUser(registerInput, history))
  };
};

const connectedSignUp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUp)
);

export { connectedSignUp as SignUp };
