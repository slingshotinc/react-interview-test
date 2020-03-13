import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
import { Container, Title } from "./styles";

const Main = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3008/players`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    })
      .then(res => res.json())
      .then(json => {
        setPlayers(json);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <Title>NBA Interview</Title>
      <Search />
      {players &&
        players.map(player => (
          <Card name={player.name} image={player.image} team={player.team} />
        ))}
    </Container>
  );
};

export default Main;
