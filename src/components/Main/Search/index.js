import React, { Component } from "react";
import { Container, SearchInput } from "./styles";

export default class Search extends Component {
	static displayName = Search.name;

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<SearchInput placeholder="Search..." onBlur={this.props.searchPlayers} />
			</Container>
		);
	}
}
