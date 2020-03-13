import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	background-color: #f2f2f2;
	border: 1px solid #EEE;
	border-radius: 4px;
	padding: 16px;
	width: 280px;
	text-align: center;
`

export const Name = styled.p`
	padding-bottom: 16px;
`

export const PlayerImg = styled.img`
	padding-bottom: 16px;
`

export const Team = styled.p`
	
`	

const Card = (props) => {
	const [teamData, setTeamData] = React.useState({});
	const { name, image, team } = props
  
  const baseUrl = 'http://localhost:3008'
  const route = `/teams/${team}`
  const query = '?'
  const url = `${baseUrl}${route}${query}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setTeamData(result);
    };
    fetchData();
	}, [url]);
	
	return (
		<Container>
			<Name>{name}</Name>
			<PlayerImg src={`http://localhost:3008/${image}`} alt="player_image" />
			<Team>{teamData.name}</Team>
		</Container>
	)
};

export default Card;
