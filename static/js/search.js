function search(event){
    event.preventDefault();
    //Ill be honest idk why I made this line. if (pokeNames.toLowerCase().replace('primal ', '').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace('black ', '').replace('white ', '').replace(' cloak','').replace('%','')==""){pokeNames="";}

    pokeNames = document.getElementById("search-bar").value.replace("'", "\\'");
    highStats = document.getElementById("HighStatsMenu").value;
    lowStats = document.getElementById("LowStatsMenu").value;
    generationFilt = document.getElementById("GenerationMenu").value;
    legendFilt = document.getElementById("LegendaryMenu").value;
    typeFilt = document.getElementById("TypeMenu").value;
    type2Filt = document.getElementById("Type2Menu").value;
    teamBool = teamBtn.value;
    team = document.getElementById("search-bar").value;
    if (teamBool == "1" & team==""){team = "rand"}
    replaceName = "";

    //This gets sent to python
    var queryString = "/pokedex"
    + "?pokeName=" + pokeNames
    + "&highStats=" + highStats
    + "&lowStats=" + lowStats
    + "&generationFilt=" + generationFilt
    + "&legendFilt=" + legendFilt
    + "&typeFilt=" + typeFilt
    + "&type2Filt=" + type2Filt
    + "&teamBool=" + teamBool
    + "&team=" + team;
    teamBtn.value="0";

    $.getJSON( queryString, function (json) {
        var items = [];
        if (json.length != 0){
            var s2 = "";
            if(json.length > 1){s2="s";}
            if(json.length < 6 && $(window).height()>700){document.getElementById("bgColour").style.height= "100%";} //console.log($(window).height());
            items.push(json.length + " result"+s2+" found!");
            $.each(json, function(key, val){
                replaceName = this.name.toLowerCase().replace('alolan ','AL').replace('galarian ','GL').replace('dawn wings ','DW').replace('dusk mane ','DM').replace('ultra ','UU').replace('ash-','AA').replace(' x','XX').replace(' y','YY').replace('mega ', 'MM').replace('primal ', 'PP').replace('gigantamax ', '').replace('black ', 'BB').replace('white ', 'WW')
                .replace(" full belly", "-full-belly").replace('. ', '-').replace(' ', '-').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace(' cloak','').replace(' style','').replace('flabébé','flabebe').replace('jr.', 'jr').replace('♂','-m').replace('♀','-f').replace('%','').replace('’','').replace(':','').replace("'", "\\'");
                if (replaceName.includes('MM')){replaceName = replaceName.replace('MM', '') + "-mega";}
                if (replaceName.includes('XX')){replaceName = replaceName.replace('XX', '') + "-x";}
                if (replaceName.includes('YY')){replaceName = replaceName.replace('YY', '') + "-y";}
                if (replaceName.includes('PP')){replaceName = replaceName.replace('PP', '') + "-primal";}
                if (replaceName.includes('BB')){replaceName = replaceName.replace('BB', '') + "-black";}
                if (replaceName.includes('WW')){replaceName = replaceName.replace('WW', '') + "-white";}
                if (replaceName.includes('AA')){replaceName = replaceName.replace('AA', '') + "-ash";}
                if (replaceName.includes('AL')){replaceName = replaceName.replace('AL', '') + "-alolan";}
                if (replaceName.includes('GL')){replaceName = replaceName.replace('GL', '') + "-galarian";}
                if (replaceName.includes('DW')){replaceName = replaceName.replace('DW', '') + "-dawn-wings";}
                if (replaceName.includes('DM')){replaceName = replaceName.replace('DM', '') + "-dusk-mane";}
                if (replaceName.includes('UU')){replaceName = replaceName.replace('UU', '') + "-ultra";}
                if (replaceName.includes('-rotom')){replaceName = "rotom-" + replaceName.replace('-rotom', '');}
                console.log(replaceName);

                var t1=val.type1;
                var t2=val.type2;
                if(t2 == ""){
                    t2 = "None";
                }
                items.push(
                "<li>" + " | "
                + val.number + " | "
                + "<button onclick=\"checkArt(this.name); weaknesses('"+val.type1+"', '"+val.type2+"');\" name="+replaceName+" class='pkmnName lead'>" + val.name + "</button>" + " | "
                + "Type 1: " + val.type1 + " | "
                + "Type 2: " + t2 + " | "
                + "Generation " + val.generation + " | "
                + val.legendary.replace("False", "Not").replace("True", "Is") + " Legendary" + " | "
                + "<br>" + " | "
                + "Stat Total: " + val.total + " | "
                + "HP: " + val.hp + " | "
                + "Attack: " + val.attack + " | "
                + "Defense: " + val.defense + " | "
                + "Special Attack: " + val.sp_attack + " | "
                + "Special Defense: " + val.sp_defense + " | "
                + "Speed: " + val.speed + " | "
                + "</li>");
            });
        }
        else{
            items.push("Whoops! No results! Try something less specific.");
            document.getElementById("bgColour").style.height= "100%";
        }
        items.push();
        $("#search-results").html(items);
    });
}

function searchBtnAction() {
    bgColor.style.height= "";
    search(event);
    searchResults.style.display = "inline-block";
    gotoBottom.style.display = "inline-block";
}

function teamBtnAction(){
    teamBtn.value="1";
    copyBtn.style.display = "inline-block";
    searchBtnAction();
}

function copyTeam(){
    var copyThis = ""
    var teamLis = document.getElementById("search-results").getElementsByTagName("li");
    for (var i = 0; i < teamLis.length; i++) {
        copyThis += teamLis[i].getElementsByTagName("button")[0].innerText + "|"
    }
    copyThis = copyThis.slice(0, -1).toLowerCase().replace(" full belly", "-full-belly").replace('. ', '-').replace(' ', '-').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace(' cloak','').replace(' style','').replace('flabébé','flabebe').replace('jr.', 'jr').replace('♂','-m').replace('♀','-f').replace('%','').replace('’','').replace(':','').replace("'", "\\'");
    searchBar.value = copyThis;
    searchBar.select();
    searchBar.setSelectionRange(0, 99999);
    document.execCommand("copy");
    searchBar.value = "";
    alert("Team copied.");
}

copyBtn.addEventListener("click", copyTeam);
searchBtn.addEventListener("click", searchBtnAction);
teamBtn.addEventListener("click", teamBtnAction);