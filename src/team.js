import React from 'react';
import $ from 'jquery';
import {getFirstImageFromGoogle} from './apiCalls/apiCalls.js';
import { setClassColor } from './helper.js';


export class Team extends React.Component {
    constructor(props) {        
        super(props);
        var squad = this.props.pickedTeam.squad;
        var coach;
        var goalkeepers = [];
        var defenders = [];
        var midfielders = [];
        var attackers = [];

        for (var i = 0, length = squad.length; i<length; i++) {
            if (squad[i].role === "COACH"){
                coach = squad[i];
            };
            if (squad[i].position === "Goalkeeper"){
                goalkeepers.push(squad[i]);
            };
            if (squad[i].position === "Defender"){
                defenders.push(squad[i]);
            };
            if (squad[i].position === "Midfielder"){
                midfielders.push(squad[i]);
            };
            if (squad[i].position === "Attacker"){
                attackers.push(squad[i]);
            };
        };      
        
        this.state = {           
            pickedTeam: this.props.pickedTeam,
            showPickedTeam: this.props.showPickedTeam,
            coach: coach,
            goalkeepers: goalkeepers,
            defenders: defenders,
            midfielders: midfielders,
            attackers: attackers,
            colors: this.props.pickedTeam.clubColors
        }; 
    }
    componentWillReceiveProps(nextProps){
        var squad = nextProps.pickedTeam.squad;
        var coach;
        var goalkeepers = [];
        var defenders = [];
        var midfielders = [];
        var attackers = [];

        for (var i = 0, length = squad.length; i<length; i++) {
            if (squad[i].role === "COACH"){
                coach = squad[i];
            };
            if (squad[i].position === "Goalkeeper"){
                goalkeepers.push(squad[i]);
            };
            if (squad[i].position === "Defender"){
                defenders.push(squad[i]);
            };
            if (squad[i].position === "Midfielder"){
                midfielders.push(squad[i]);
            };
            if (squad[i].position === "Attacker"){
                attackers.push(squad[i]);
            };
        };       
        this.setState({           
            pickedTeam: nextProps.pickedTeam,
            showPickedTeam: nextProps.showPickedTeam,
            coach: coach,
            goalkeepers: goalkeepers,
            defenders: defenders,
            midfielders: midfielders,
            attackers: attackers,
            colors: nextProps.pickedTeam.clubColors
        });
    }
    render(){
        const goalkeepers = this.state.goalkeepers.map((goalkeeper, i) => {
            return (
              <div className="teamOuterButton col-sm-4" key={i}>  
                <div className={"player " + setClassColor(this.state.colors)} key={i}><p>{goalkeeper.name}</p></div>
              </div>
            )
          })
          const defenders = this.state.defenders.map((defender, i) => {
            return (
              <div className="teamOuterButton col-sm-4" key={i}>  
                <div className={"player " + setClassColor(this.state.colors)} key={i}><p>{defender.name}</p></div>
              </div>
            )
          })
          const midfielders = this.state.midfielders.map((midfielder, i) => {
            return (
              <div className="teamOuterButton col-sm-4" key={i}>  
                <div className={"player " + setClassColor(this.state.colors)} key={i}><p>{midfielder.name}</p></div>
              </div>
            )
          })
          const attackers = this.state.attackers.map((attacker, i) => {
            return (
              <div className="teamOuterButton col-sm-4" key={i}>  
                <div className={"player " + setClassColor(this.state.colors)} key={i}><p>{attacker.name}</p></div>
              </div>
            )
          })
        if(this.props.showPickedTeam){
            return(
                <div className="col-sm-12">
                    <div className="clubinfo-wrapper col-sm-4">
                        <div className="club-info col-sm-12">
                            <div className="club-info-row col-sm-12">
                                <label>Club name:</label> <p>{this.props.pickedTeam.name}</p>
                            </div>
                            <div className="club-info-row col-sm-12">
                                <label>Founded:</label> <p>{this.props.pickedTeam.founded}</p>
                            </div>
                            <div className="club-info-row col-sm-12">
                                <label>Adress:</label> <p>{this.props.pickedTeam.address}</p>
                            </div>
                            <div className="club-info-row col-sm-12">
                                <label>Website:</label> <p>{this.props.pickedTeam.website}</p>
                            </div>
                            <div className="club-info-row col-sm-12">
                                <label>Colors:</label> <p>{this.props.pickedTeam.clubColors}</p>
                            </div>
                        </div>
                        <div className="coach-info col-sm-12">
                            <div className="coach-info-row col-sm-12">
                                <label>Name:</label> <p>{this.state.coach.name}</p>
                            </div>
                            <div className="coach-info-row col-sm-12">
                                <label>Birth:</label> <p>{this.state.coach.dateOfBirth}</p>
                            </div>
                            <div className="coach-info-row col-sm-12">
                                <label>Country:</label> <p>{this.state.coach.countryOfBirth}</p>
                            </div>
                        </div>
                    </div>
                    <div className="squad-wrapper col-sm-12 col-md-8">
                        <div className="pitch col-sm-12">
                            <div className="player-section col-sm-12">
                                {goalkeepers}
                            </div>
                            <div className="player-section col-sm-12">
                                {defenders}
                            </div>
                            <div className="player-section col-sm-12">
                                {midfielders}
                            </div>
                            <div className="player-section col-sm-12">
                                {attackers}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                </div>
            )
        }
    }
}