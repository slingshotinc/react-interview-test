import React from "react";

// import { AppContext } from "../store";
// const { Consumer } = AppContext;
import Card from "./Card";

const Players = ({term, isEditing, setIsEditing, favorites, setFavorites}) => {
  // const players = React.useContext(AppContext)
  const [players, setPlayers] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState(true)
  
  const baseUrl = 'http://localhost:3008'
  const route = '/players'
  const searchQuery = `q=${term}`
  const pageQuery = '&_page=1'
  const limitQuery = '_limit=10'
  const query = `?${searchQuery}&${limitQuery}&${pageQuery}`
  const url = `${baseUrl}${route}${query}`

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
        <Card 
          {...player}
          key={player.id} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing}
          favorites={favorites} 
          setFavorites={setFavorites}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
        />
      )
    })
  )
}

export default Players