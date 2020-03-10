import React, { Component } from "react";
import { Button } from 'reactstrap';
import Search from "./Search";
import Card from "./Card";
import { Container, Title } from "./styles";


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      teamData: [],
      playerTeamData: [],
      searchValue: '',
      searchPage: 1
    };
  }

    componentDidMount() {
      this.getPlayerData();
    }
  
    nextPage = () => {
      this.getPlayerData(1);
    }

    previousPage = () => {
      this.getPlayerData(-1);
    } 

    searchPlayers = (e) => {
      this.getPlayerData(0, e.target.value);
    }

    savePlayerData = (id, name, college, position, teamId) => {
      fetch('http://localhost:3008/players/' + id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',                                                              
        body: JSON.stringify( { name: name, college: college, position: position, team: teamId } )                                        
      });

      //If the team was updated, change the team player data as well
      var originalTeamId = this.state.playerTeamData.filter(player => player.id == id)[0].teamId;
      if(teamId != originalTeamId)
      {
        var oldPlayerData = this.state.teamData.filter(team => team.id == originalTeamId)[0].players.filter(player => player != id);

        var newPlayerData = this.state.teamData.filter(team => team.id == teamId)[0].players.slice(0);
        newPlayerData.unshift(id);
        
        fetch('http://localhost:3008/teams/' + originalTeamId, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PATCH',                                                              
          body: JSON.stringify( { players: oldPlayerData } )                                        
        });

        fetch('http://localhost:3008/teams/' + teamId, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PATCH',                                                              
          body: JSON.stringify( { players: newPlayerData } )                                        
        }); 

      }

      this.getPlayerData();
    }

    render() {
      if(this.state.isLoading) return (<div></div>);
      var totalRecords = this.state.playerTeamData.length;
      var recordsPerPage = 10;

      var nextButtonColor = (totalRecords < recordsPerPage) ? "secondary" : "primary";
      var previousButtonColor = (this.state.searchPage > 1) ? "primary" : "secondary";

      return (
        <Container>
        <Title>NBA Interview</Title>
        <div class="row">
          <div class="col-3">
          <Search searchPlayers={this.searchPlayers} />
          </div>
          <div class="col-1">
              <Button color={previousButtonColor} disabled={(previousButtonColor == "secondary")} onClick={this.previousPage}>Prev</Button>
           </div>
           <div class="col-1">
              <Button color={nextButtonColor} disabled={(nextButtonColor == "secondary")} onClick={this.nextPage}>Next</Button>
            </div>
        </div>
          <div class="row">
          {this.state.playerTeamData.map(player =>
              <div class="col">
                <Card savePlayerData={this.savePlayerData} teamData={this.state.teamData}  id={player.id} name={player.name} image={player.image} teamName={player.teamName} teamId={player.teamId} college={player.college} position={player.position} />
              </div>
            )
            }
          </div>
        </Container>
      );
    }

  async getPlayerData(page = 0, searchValue = '') {
    
    if(this.state.teamData.length == 0)
    {
      var teamResponse = await fetch('http://localhost:3008/teams')
      var teamData = await teamResponse.clone().json();
      this.setState({ teamData: teamData });
    }

    var paging = (searchValue.length > 0) ? 1 : this.state.searchPage + page;

    var playerFetchUrl = 'http://localhost:3008/players?_page=' + paging;
    playerFetchUrl += (searchValue.length > 0) ? '&q=' + searchValue : '';

    var playerResponse = await fetch(playerFetchUrl)
    var playerData = await playerResponse.clone().json();

    var playerTeamData = playerData.map(player => {
      const playerSelection = {};
      playerSelection.name = player.name;
      playerSelection.image = player.image;
      playerSelection.college = player.college;
      playerSelection.position = player.position;
      playerSelection.id = player.id;
      playerSelection.teamId = player.team;
      playerSelection.teamName = this.state.teamData.filter(team => team.id == player.team)[0].name;
      return playerSelection;
    });

    this.setState({ isLoading: false, playerTeamData: playerTeamData, searchPage: paging });
  }

}



