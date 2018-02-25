// FORMULARZ DO DODAWANIA NOWEGO WYZWANIA

import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Radio,
  HelpBlock,
  Checkbox
} from "react-bootstrap";

class AddChallenge extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const newChallenge = {
      title: this.title.value,
      description: this.description.value,
      img: this.img.value,
      category: this.category.value,
      localization: { city: this.city.value, country: this.country.value },
      limit: this.limit.value,
      date: this.date.value
    };
    this.props.sendNewChallenge(newChallenge);
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

    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          {this.props.hasError && (
            <p className="text-center">
              Wystąpił błąd podczas dodawania wyzwania. Spróbuj ponownie!
            </p>
          )}
          {this.props.withSuccess && (
            <p className="text-center">
              Poprawnie dodano wyzwanie! Jesteś wielki!
            </p>
          )}
          <Form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Nazwa wyzwania"
              placeholder="Chwytliwa nazwa to podstawa!"
              inputRef={input => {
                this.title = input;
              }}
            />

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Opis wyzwania</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Opisz co trzeba zrobić, by zaliczyć zadanie."
                inputRef={input => {
                  this.description = input;
                }}
              />
            </FormGroup>

            <FieldGroup
              id="formControlsText"
              type="text"
              label="Zdjęcie wyzwania"
              placeholder="Podaj URL do zdjęcia"
              inputRef={input => {
                this.img = input;
              }}
            />

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Kategoria</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Wybierz kategorię"
                inputRef={input => {
                  this.category = input;
                }}
              >
                <option value="sport">Sport</option>
                <option value="jedzenie">Jedzenie</option>
                <option value="rozrywka">Rozrywka</option>
                <option value="Nauka">Nauka</option>
              </FormControl>
            </FormGroup>

            <FieldGroup
              id="formControlsText"
              type="number"
              label="Liczba wykonań "
              placeholder="Ile powtórzeń należy wykonać, aby zaliczyć zadanie"
              inputRef={input => {
                this.limit = input;
              }}
            />

            <FieldGroup
              id="formControlsText"
              type="text"
              label="Miasto"
              placeholder="Miasto, którego dotyczy wyzwanie"
              inputRef={input => {
                this.city = input;
              }}
            />

            <FieldGroup
              id="formControlsText"
              type="text"
              label="Kraj"
              placeholder="Kraj, którego dotyczy wyzwanie"
              inputRef={input => {
                this.country = input;
              }}
            />

            <FieldGroup
              id="formControlsText"
              type="date"
              label="Do kiedy wyzwanie ma być aktywne"
              inputRef={input => {
                this.date = input;
              }}
            />

            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const sendNewChallenge = newChallenge => {
  return dispatch => {
    dispatch({ type: "ADD_CHALLENGE_PENDING" });
    fetch("http://api.isa-jfdzw1.vipserv.org/ipmdev/challenge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newChallenge)
    })
      .then(rsp => rsp.json())
      .then(() => {
        dispatch({ type: "ADD_CHALLENGE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "ADD_CHALLENGE_ERROR" });
      });
  };
};

const mapStateToProps = state => {
  return {
    hasError: state.challengesData.addChallengeStatus.hasError,
    withSuccess: state.challengesData.addChallengeStatus.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendNewChallenge: newChallenge => dispatch(sendNewChallenge(newChallenge))
  };
};

const connectedAddChallenge = connect(mapStateToProps, mapDispatchToProps)(
  AddChallenge
);

export { connectedAddChallenge as AddChallenge };
