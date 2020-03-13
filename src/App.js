import React from "react";
import styled from "styled-components";

import Search from "./components/Search";
import Players from "./components/Players"

export const Container = styled.div`
	height: 100%;
	width: 100%;
`

export const Title = styled.p`
	font-size: 24px;
	padding-bottom: 32px;
 	text-align: center;
`

const App = () => (
  <Container>
    <Title>NBA Interview</Title>
    <Search />
    <Players></Players>
  </Container>
)

export default App;