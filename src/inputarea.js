import React from 'react';
import {setClassColor} from './helper.js'

var that;
export class InputAreaCompetition extends React.Component {
    constructor(props) {

        super(props);
        that = this;

        this.state = {
            choosenField : "defaultField"
        }
 
      }
    competitionChange(event){
        that.setState({
            choosenField :  event.target.value
        });
        that.props.competitionChanged(event.target.value)
    }
    render(){
        const competitions = this.props.competitions.map((competition, i) => {
            if(competition.name === "Serie A" ||
            (competition.name === "Premier League" && competition.area.name === "England") ||
               competition.name === "La Liga" ||
               competition.name === "Ligue 1" ||
               (competition.name === "Bundesliga" && competition.area.name === "Germany")){
                return <option value={competition.id} key={i}>{competition.name}</option>
            }
          })
        return(
            <div className="inputOuter col-sm-12">
                <div className="inputInner col-sm-12 col-md-6 form-group">
                    <label> Pick a competition </label>
                    <select className="form-control" onChange={this.competitionChange} value={this.props.choosenField}>
                        <option value="defaultField"> -- Select --</option>
                        {competitions}
                    </select>
                </div>
            </div>
        )
    }
}

var _that
export class InputAreaTeams extends React.Component {
    constructor(props) {
        super(props);
        _that = this;
 
      }

    componentWillReceiveProps(nextProps){
        
    }
    teamSelected(teamId){
        _that.props.teamPicked(teamId);
    }
    render(){
        if(this.props.showTeams){

            const teams = this.props.teams.map((team, i) => {
                return (
                  <div className="teamOuterButton col-sm-3" key={i}>  
                    <div className={"teamButton " + setClassColor(team.clubColors)} key={i} onClick={() => { this.teamSelected(team.id) }}>{team.name}</div>
                  </div>
                )
              })

            return(
                <div className="teams col-sm-12 text-center">
                    <label> Pick a club </label>
                    <div className="col-sm-12 ">
                        {teams}                      
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

export default InputAreaCompetition;
