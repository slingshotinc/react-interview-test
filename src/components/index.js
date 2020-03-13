import React from "react";
import styled from "styled-components";

import Search from "./Search";
import Card from "./Card";

export const Container = styled.div`
	height: 100%;
	width: 100%;
`

export const Title = styled.p`
	font-size: 24px;
	padding-bottom: 32px;
 	text-align: center;
`

const Main = () => (
  <Container>
    <Title>NBA Interview</Title>
    <Search />
    <Card />
  </Container>
)

export default Main;

