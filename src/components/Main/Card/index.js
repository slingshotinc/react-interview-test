import React, { useState } from "react";
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

const Card = ({ name, college, position, image, team, handleEdit }) => {
  const [editActive, setEditActive] = useState(false);

  const handleClick = e => {
    setEditActive(!editActive);
    handleEdit(e);
  };

  const handleCancel = () => {
    setEditActive(false);
  };

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
            <Input type="text" value={name} />
          </InputWrapper>
          <InputWrapper>
            <Label>College:</Label>
            <Input type="text" value={college} />
          </InputWrapper>
          <InputWrapper>
            <Label>Position:</Label>
            <Input type="text" value={position} />
          </InputWrapper>
        </FormInner>
        <ButtonWrapper>
          <Button bg={"#bbff9f"}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default Card;
