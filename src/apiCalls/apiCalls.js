import $ from 'jquery';

export function getCompetitions(){
    var url = "https://api.football-data.org/v2/competitions";

    return $.ajax({
        headers: { 'X-Auth-Token': '8c77543538814eb6a3aae0acd6b558db' },
        dataType:'json',
        type: 'GET',
        url: url,
      });
}

export function getTeams(competitionId){
    var url = "https://api.football-data.org/v2/competitions/"+competitionId+"/teams";

    return $.ajax({
        headers: { 'X-Auth-Token': '8c77543538814eb6a3aae0acd6b558db' },
        dataType:'json',
        type: 'GET',
        url: url,
      });
}

export function getTeam(teamId){
    var url = "https://api.football-data.org/v2/teams/"+teamId;

    return $.ajax({
        headers: { 'X-Auth-Token': '8c77543538814eb6a3aae0acd6b558db' },
        dataType:'json',
        type: 'GET',
        url: url,
      });
}

export function getFirstImageFromGoogle(searchTerm){
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBLunkeZPIXculoTutaRp6OcrpGaRV640E&cx=000889150672232088217:b3tsgq5d8s0&q="+searchTerm+"&searchType=image&fileType=jpg&imgSize=small&alt=json";

    return $.ajax({
        dataType:'json',
        type: 'GET',
        url: url,
      });
}