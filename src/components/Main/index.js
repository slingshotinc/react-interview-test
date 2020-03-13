import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
import { Button, ButtonContainer, Container, Title } from "./styles";

const Main = () => {
  const limit = 10;
  const playerCount = 98; // TODO: get this from api later
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3008/players?_page=${page}&_limit=${limit}`, {
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
  }, [page]);

  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);
    fetch(`http://localhost:3008/players?q=${value}`, {
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
  };

  const handleCardEdit = e => {
    console.log("handle edit");
  };

  const handlePageNext = () => {
    setPage(page + 1);
  };

  const handlePagePrev = () => {
    setPage(page - 1);
  };

  const getTeamName = id => {
    return teams.filter(team => team.id === id)[0].name;
  };

  return (
    <Container>
      <Title>NBA Interview</Title>
      <Search handleSearch={handleSearch} />
      <ButtonContainer>
        {page > 1 && <Button onClick={handlePagePrev}>&lt; Prev 10</Button>}
        {page < Math.ceil(playerCount / limit) && (
          <Button onClick={handlePageNext}>Next 10 &gt;</Button>
        )}
      </ButtonContainer>
      {players.length &&
        teams.length &&
        players.map(player => (
          <Card
            {...player}
            key={player.name}
            handleEdit={handleCardEdit}
            team={getTeamName(player.team)}
          />
        ))}
    </Container>
  );
};

export default Main;
