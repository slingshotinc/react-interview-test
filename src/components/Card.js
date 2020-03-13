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

const Card = () => (
	<Container>
		<Name>Gordon "Snake" Hayward</Name>
		<PlayerImg src="http://localhost:3008/gordon_hayward.png" alt="player_image" />
		<Team>Boston Celtics</Team>
	</Container>
);

export default Card;
