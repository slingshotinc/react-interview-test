import React, { Component } from "react";
import { Input } from 'reactstrap';

export default class TeamSelect extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		teamId: this.props.playerTeamId
	  };
    }
    
    teamChange = (event) => {
        this.props.onTeamChange(event.target.value);
      }


	render() {
	  return (
		<Input onChange={this.teamChange} type="select" name="select" id="playerTeam">
		{this.props.teamData.map(team =>
       	<option value={team.id} selected={(this.props.playerTeamId == team.id)}>{team.name}</option>
       	)
       	}
    	</Input>
	  );
	}
  }

