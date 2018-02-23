// FORMULARZ DO DODAWANIA NOWEGO WYZWANIA

import React from "react";
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

const AddChallenge = props => {
  const handleSubmit = e => {
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
    sendNewChallenge(newChallenge);
  };

  const sendNewChallenge = challenge => {
    fetch("http://api.isa-jfdzw1.vipserv.org/ipmdev/challenge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(challenge)
    });
  };

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
    <Form onSubmit={handleSubmit}>
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
  );
};

export default AddChallenge;
