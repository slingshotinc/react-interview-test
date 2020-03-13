import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	
`

export const SearchInput = styled.input`
	
`

const Search = ({term, setTerm}) => {
	const handleChange = (event) => {
		setTerm(event.target.value)
	}

	return (
		<Container>
			<SearchInput 
				value={term}
				onChange={handleChange} 
				placeholder="Search..." 
			/>
		</Container>
	)
};

export default Search;
