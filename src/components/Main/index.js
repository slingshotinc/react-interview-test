import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
import { Container, Title } from "./styles";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3008/players?_page=${page}&_limit=10`, {
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

    fetch(`http://localhost:3008/teams`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    })
      .then(res => res.json())
      .then(json => {
        setTeams(json);
      })
      .catch(error => console.log(error));
  }, [page]);

  const getTeamName = id => {
    return teams.filter(team => team.id === id)[0].name;
  };

  return (
    <Container>
      <Title>NBA Interview</Title>
      <Search />
      {players.length &&
        teams.length &&
        players.map(player => (
          <Card
            key={player.name}
            name={player.name}
            image={player.image}
            team={getTeamName(player.team)}
          />
        ))}
    </Container>
  );
};

export default Main;
