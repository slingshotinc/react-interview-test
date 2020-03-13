import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonWrapper,
  Container,
  Form,
  FormInner,
  Input,
  InputWrapper,
  Label,
  Name,
  PlayerImg,
  Team
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Card = ({ player, team, updateComplete }) => {
  const [editActive, setEditActive] = useState(false);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    setEdit(player);
  }, [player]);

  const handleSave = () => {
    fetch(`http://localhost:3008/players/${edit.id}`, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(edit)
    })
      .then(res => {
        updateComplete();
      })
      .catch(error => console.log(error));
  };

  const handleChange = e => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleClick = e => {
    setEditActive(true);
  };

  const handleCancel = () => {
    setEditActive(false);
  };

  const { name, image } = player;
  return (
    <Container>
      <FontAwesomeIcon icon={faEdit} onClick={handleClick} />
      <Name>{name}</Name>
      <PlayerImg src={`http://localhost:3008/${image}`} alt="player_image" />
      <Team>{team}</Team>
      <Form editActive={editActive}>
        <FormInner>
          <InputWrapper>
            <Label>Name:</Label>
            <Input
              name="name"
              type="text"
              value={edit.name}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>College:</Label>
            <Input
              name="college"
              type="text"
              value={edit.college}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Position:</Label>
            <Input
              name="position"
              type="text"
              value={edit.position}
              onChange={handleChange}
            />
          </InputWrapper>
        </FormInner>
        <ButtonWrapper>
          <Button bg={"#bbff9f"} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default Card;
