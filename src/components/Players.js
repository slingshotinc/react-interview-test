import React from "react";

// import { AppContext } from "../store";
// const { Consumer } = AppContext;
import Card from "./Card";

const Players = () => {
  // const players = React.useContext(AppContext)
  const [players, setPlayers] = React.useState([]);
  
  const baseUrl = 'http://localhost:3008'
  const route = '/players'
  const query = '?'
  const url = `${baseUrl}${route}${query}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setPlayers(result);
    };
    fetchData();
  }, [url]);

  return (
    players.map(player => {
      return (
        <Card key={player.id} {...player}/>
      )
    })
  )
}

export default Players