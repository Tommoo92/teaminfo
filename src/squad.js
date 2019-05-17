import React, { Component } from 'react';
import './style/css/base.css';
import {InputAreaCompetition, InputAreaTeams} from './inputarea.js'
import {Team} from './team.js'
import {getCompetitions, getTeams, getTeam} from './apiCalls/apiCalls.js';
import $ from 'jquery';

var that;
export class Squad extends Component {
  constructor(props) {
    super(props);
    this.state = {
        competitions: [],
        teams: [],
        showTeams: false,
        pickedTeam: [],
        showPickedTeam: false
    };
    that = this;
  }

  componentDidMount(){
    $.when(getCompetitions()).then(function successHandler(data){
			that.setState({
  				competitions: data.competitions
			});
		},function errorHandler(){
			console.log('Ajax call failed')
    });   
  }

  competitionChanged(competitionId){

    $.when(getTeams(competitionId)).then(function successHandler(data){
      console.log(data);
			that.setState({
  				teams: data.teams
			});
		},function errorHandler(){
			console.log('Ajax call failed')
    });

    that.setState({
      showTeams: true
    });
  }

  teamPicked(teamId){
    $.when(getTeam(teamId)).then(function successHandler(data){
			that.setState({
          pickedTeam: data,
          showPickedTeam: true
			});
		},function errorHandler(){
			console.log('Ajax call failed')
    });
  }

  render() {
    return (
        <div>
            <InputAreaCompetition competitions={this.state.competitions} competitionChanged={this.competitionChanged}/>
            <InputAreaTeams teams={this.state.teams} showTeams={this.state.showTeams} teamPicked={this.teamPicked}/>
            {this.state.showPickedTeam ?(
                <Team showPickedTeam={this.state.showPickedTeam} pickedTeam={this.state.pickedTeam}/>
            ):(
            <div>
            </div>
            )}
        </div>  
    );
  }
}
