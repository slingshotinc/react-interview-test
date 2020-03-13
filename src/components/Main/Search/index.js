import React from "react";
import { Container, SearchInput } from "./styles";

const Search = ({ handleSearch }) => (
  <Container>
    <SearchInput placeholder="Search..." onChange={handleSearch} />
  </Container>
);

export default Search;
