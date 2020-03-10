import React, { Component } from "react";
import TeamSelect from "../TeamSelect";
import { Container, Name, PlayerImg, Team } from "./styles";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, FormFeedback } from 'reactstrap';

export default class Card extends Component {
	static displayName = Card.name;
  
	constructor(props) {
	  super(props);
	  this.state = {
		name: this.props.name, invalidName: false,
		image: this.props.image, modal: false,
		college: this.props.college, invalidCollege: false, 
		position: this.props.position, invalidPosition: false,
		teamId: this.props.teamId
	  };
	}

	onTeamChange = (teamId) => {
	  this.setState({teamId: teamId});
	}

	updateName = (event) => {
		if(event.target.value.length == 0){
			this.setState({invalidName: true});
		}
		else{
			this.setState({invalidName: false});
		}
		this.setState({name: event.target.value});
	  }

	  updateCollege = (event) => {
		if(event.target.value.length == 0){
			this.setState({invalidCollege: true});
		}
		else{
			this.setState({invalidCollege: false});
		}
		this.setState({college: event.target.value});
	  } 

	saveData= () => {
		this.props.savePlayerData(this.props.id, this.state.name, this.state.college, this.state.position, this.state.teamId);
		this.setState({
			modal: !this.state.modal
		});
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
	  const playerImageSource = "http://localhost:3008/" + this.props.image;
	  return (
		<Container>
		<Name>{this.props.name}</Name>
		<PlayerImg src={playerImageSource}  alt="player_image" />
	    <Team>{this.props.teamName}</Team>
		<Button color="primary" onClick={this.toggle}>Edit</Button>
	    <Modal isOpen={this.state.modal} toggle={this.toggle}>
		  <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
		  <ModalBody>
		  <Form>
      		<FormGroup>        
			  <Label for="playerName">Name</Label>
              <Input invalid={this.state.invalidName} value={this.state.name} onChange={this.updateName} name="playerName" id="playerName" />
		      <FormFeedback>Name is required</FormFeedback>
			</FormGroup>
			<FormGroup>        
			  <Label for="playerCollege">College</Label>
              <Input invalid={this.state.invalidCollege} value={this.state.college} onChange={this.updateCollege} name="playerCollege" id="playerCollege" />
		      <FormFeedback>College is required</FormFeedback>
			</FormGroup>
			<FormGroup>        
			  <Label for="playerPosition">Position</Label>
              <Input invalid={this.state.invalidPosition} value={this.state.position} onChange={this.updatePosition} name="playerPosition" id="playerPosition" />
		      <FormFeedback>Position is required</FormFeedback>
			</FormGroup>	
			<FormGroup>
				<Label for="playerTeam">Team</Label>
				<TeamSelect onTeamChange={this.onTeamChange} playerTeamId={this.state.teamId} teamData={this.props.teamData}></TeamSelect>
			</FormGroup>				
		  </Form>
		  </ModalBody>
		  <ModalFooter>
			<Button color="primary" onClick={this.saveData}>Save</Button>{' '}
			<Button color="secondary" onClick={this.toggle}>Cancel</Button>
		  </ModalFooter>
		</Modal>	
	    </Container>

	  );
	}
  }


