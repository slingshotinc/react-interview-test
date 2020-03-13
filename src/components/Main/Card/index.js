import React from "react";
import { Container, Name, PlayerImg, Team } from "./styles";

const Card = ({ name, image, team }) => (
  <Container>
    <Name>{name}</Name>
    <PlayerImg src={`http://localhost:3008/${image}`} alt="player_image" />
    <Team>{team}</Team>
  </Container>
);

export default Card;
