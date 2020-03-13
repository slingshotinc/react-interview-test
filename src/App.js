import React from "react";
import styled from "styled-components";

import Search from "./components/Search";
import Players from "./components/Players"

const Container = styled.div`
	height: 100%;
	width: 100%;
  position: relative;
`

const Title = styled.p`
	font-size: 24px;
	padding-bottom: 32px;
 	text-align: center;
`

const Count = styled.span`
  position: fixed;
  top: 16px;
  right: 16px;
`

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('guard')
  const [isEditing, setIsEditing] = React.useState(false)
  const [favorites, setFavorites] = React.useState([])

  return (
    <Container>
      <Title>NBA Interview</Title>
      <Count>{`Favorites: ${favorites.length}`}</Count>
      <Search term={searchTerm} setTerm={setSearchTerm}/>
      <Players
        favorites={favorites}
        setFavorites={setFavorites}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        term={searchTerm}/>
    </Container>
  )
}

export default App;