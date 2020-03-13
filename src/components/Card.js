import React from "react";
import styled from "styled-components";
import { Formik } from 'formik';

import MdHeart from 'react-ionicons/lib/MdHeart'
import MdCreate from 'react-ionicons/lib/MdCreate'

const Container = styled.div`
	display: flex;
`

const CardContainer = styled.div`
	position: relative;
	background-color: #f2f2f2;
	border: 1px solid #EEE;
	border-radius: 4px;
	padding: 16px;
	margin: 16px;
	width: 280px;
	text-align: center;
`

const EditFormContainer = styled.div`
	padding: 16px;
	margin: 16px;
	width: 280px;
`

const Name = styled.p`
	padding-bottom: 16px;
`

const PlayerImg = styled.img`
	padding-bottom: 16px;
`

const Team = styled.p`
	
`	

const HeartIcon = styled(MdHeart)`
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
`

const EditIcon = styled(MdCreate)`
	cursor: pointer;
	position: absolute;
	top: 10px;
	left: 10px;
`

const FormControl = ({name, value, handleChange}) => (
	<div>
		<label>{name.toUpperCase()}</label>
		<input
			name={name}
			type="text"
			onChange={handleChange}
			value={value}
		/>
	</div>
)
const Input = styled(FormControl)`
	margin: 5px;
`

const EditForm = (props) => {
	console.log(props)
	const { teamData, playerData, isEditing, setIsEditing } = props
	const initialValues = {
		name: playerData.name,
		college: playerData.college,
		position: playerData.position,
		team: teamData.team,
	}
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={async (values, { setSubmitting }) => {
					const patchUrl = `http://localhost:3008/players/${playerData.id}`
					const response = await fetch(patchUrl, {
						method: 'PATCH',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(values)
					});
					setSubmitting(false);
					setIsEditing(!isEditing)
					return await response.json();
				}}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<Input
							name="name"
							handleChange={handleChange}
							value={values.name}
						/>
						<Input
							name="college"
							type="text"
							handleChange={handleChange}
							value={values.college}
						/>
						<Input
							name="position"
							handleChange={handleChange}
							value={values.position}
						/>
						<button type="submit" disabled={isSubmitting}>
							Save
						</button>
					</form>
				)}
			</Formik>
		</div>
	)
}

const Card = (props) => {
	const { 
		isEditing, 
		setIsEditing, 
		favorites, 
		setFavorites, 
		isFavorite, 
		setIsFavorite, 
		...playerData 
	} = props
	const { name, image, team } = playerData
	const [teamData, setTeamData] = React.useState({});
  
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
	
	const isFavoritePlayer = favorites.some(favorite => favorite.id === playerData.id)

	const handleFavorite = async player => {
		let newFavorites
		let method

		if (isFavoritePlayer) {
			newFavorites = favorites.filter(fav => fav.id !== player.id)
			method = 'DELETE'
		} else {
			newFavorites = [...favorites, playerData]
			method = 'POST'
		}
		
		setFavorites(newFavorites)
		const response = await fetch(`http://localhost:3008/favorites`, {
			method,
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(playerData)
		});
		const result = await response.json()
		console.log(result)
		setIsFavorite(!isFavorite)
	}

	return (
		<Container>
			<CardContainer>
				<EditIcon color={isEditing ? "orange" : "white"} onClick={() => setIsEditing(!isEditing)}/>
				<Name>{name}</Name>
				<HeartIcon 
					color={isFavoritePlayer ? "red" : "white"} 
					onClick={handleFavorite.bind(null, playerData)}
				/>
				<PlayerImg src={`http://localhost:3008/${image}`} alt="player_image" />
				<Team>{teamData.name}</Team>
			</CardContainer>
			{isEditing && (
				<EditFormContainer>
					<EditForm 
						isEditing={isEditing}
						setIsEditing={setIsEditing} 
						playerData={playerData} 
						teamData={teamData}
					/>
				</EditFormContainer>
			)}
		</Container>
	)
};

export default Card;
