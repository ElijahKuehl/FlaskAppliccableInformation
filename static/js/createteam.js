// let the user input a string of the index numbers, the id's in the db, and inport a team like that.
// when the image is clicked and then an add pokemon button is clicked, will add to your team list.

var teams = document.getElementById("teamBtn");
var customTeam = [];
var inputTeam = "";
var inputCode = "";
var copyCode = document.getElementById("copyCode");

function openTeams(){
    randTeamBtn.style.display = "inline-block";
    addPkmnBtn.style.display = "inline-block";
    teamList.style.display = "inline-block";
}

function addPkmn(){
    customTeam.push(pkmnImage.name);
    teamList.html(customTeam);
}

function importTeam(){
    inputTeam=document.getElementById("search-bar").value;
    if(inputTeam==""){

    }
    else{
        inputTeam=inputTeam.split("|");

    }
}

function copyTeam(){
    for(var k=0; k<customTeam.length; k++){
        inputCode = inputCode + customTeam[k]+"|";
    }
    inputCode = inputCode.substring(0, inputCode.length - 1);
    pokeNames.value=inputCode;
    pokeNames.select();
    document.execCommand("copy");
    pokeNames.value="";
}


teams.addEventListener("click", openTeams);
addPkmnBtn.addEventListener("click", addPkmn);
