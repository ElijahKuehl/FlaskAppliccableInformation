$(document).ready(function(){
    $("#clear").click(function(){
        $("#search-results").hide();
        $("#search-bar").val("");
        $(".sortMenu").hide();
        $(".sortBtn").show();
        $(".filterMenu").hide();
        $(".filterBtn").show();
        $(".sortMenu").val('Default');
        $(".filterMenu").val('Default');
        $(".StatHigh").hide();
        $(".StatLow").hide();
        $(".Generation").hide();
        $(".Legendary").hide();
        $(".Type").hide();
        $("#emailMe").hide();
        document.getElementById("pkmnImage").src="https://img.pokemondb.net/artwork/victini.jpg";
        });

    $("#emailMe").hide();
    $(".sortMenu").hide();
    $(".sortBtn").show();
    $(".filterMenu").hide();
    $(".filterBtn").show();
    $("#search-results").hide();


    $("#search-button").click(function(){
        $("#search-results").show();
    });


    $(".sortBtn").click(function(){
        $(".sortMenu").hide();
        $(".sortMenu").val('Default');
        $(".sortBtn").show();
    });

    $("#HighStatsBtn").click(function(){
        $("#HighStatsMenu").show();
        $("#HighStatsBtn").hide();
    });

    $("#LowStatsBtn").click(function(){
        $("#LowStatsMenu").show();
        $("#LowStatsBtn").hide();
    });


    $("#filterClear").click(function(){
        $(".filterMenu").hide();
        $(".filterMenu").val('Default');
        $(".filterBtn").show();
    });

    $("#GenerationBtn").click(function(){
        $("#GenerationMenu").show();
        $("#GenerationBtn").hide();
    });

    $("#LegendaryBtn").click(function(){
        $("#LegendaryMenu").show();
        $("#LegendaryBtn").hide();
    });

    $("#TypeBtn").click(function(){
        $("#TypeMenu").show();
        $("#TypeBtn").hide();
    });

    $("#contact").click(function(){
        $("#emailMe").show();
    });


    $("#search-button").click(function(event) {
        event.preventDefault();
        var pokeNames = $("#search-bar").val();
        var highStats = document.getElementById("HighStatsMenu").value;
        var lowStats = document.getElementById("LowStatsMenu").value;
        var generationFilt = document.getElementById("GenerationMenu").value;
        var legendFilt = document.getElementById("LegendaryMenu").value;
        var typeFilt = document.getElementById("TypeMenu").value;
        var replaceName = "";
        //TODO: Make a second Type menu.
        if (pokeNames.toLowerCase().replace('primal ', '').replace(' ', '-').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace('black-', '').replace('white-', '').replace(' cloak','').replace('%','')==""){
            pokeNames="";
        }
        //This gets sent to python
        var queryString = "/pokedex" + "?pokeName=" + pokeNames + "&highStats=" + highStats + "&lowStats=" + lowStats + "&generationFilt=" + generationFilt + "&legendFilt=" + legendFilt + "&typeFilt=" + typeFilt;

        $.getJSON( queryString, function (json) {
            var items = [];
            if (json.length != 0){
            $.each(json, function(key, val){
                //TODO: Rotoms, Kyurems, Zygarde, Megas, Primals
                replaceName = this.name.toLowerCase().replace(' x','XX').replace(' y','YY').replace('mega ', 'MM').replace('primal ', 'PP').replace('. ', '-').replace('jr.', 'jr').replace(' ', '-').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace('black-', 'BB').replace('white-', 'WW').replace('♂','-m').replace('♀','-f').replace(' cloak','').replace('%','').replace('é','e').replace('é','e').replace('','');
                if (replaceName.includes('MM')){replaceName = replaceName.replace('MM', '') + "-mega";}
                if (replaceName.includes('XX')){replaceName = replaceName.replace('XX', '') + "-x";}
                if (replaceName.includes('YY')){replaceName = replaceName.replace('YY', '') + "-y";}
                if (replaceName.includes('PP')){replaceName = replaceName.replace('PP', '') + "-primal";}
                if (replaceName.includes('BB')){replaceName = replaceName.replace('BB', '') + "-black";}
                if (replaceName.includes('WW')){replaceName = replaceName.replace('WW', '') + "-white";}
                if (replaceName.includes('-rotom')){replaceName = "rotom-" + replaceName.replace('-rotom', '');}
                console.log(replaceName);
        items.push(
         "<li>" + " | "
        + val.number + " | "
        + "<button onclick=\"pkmnImage.src='https://img.pokemondb.net/artwork/"+replaceName+".jpg';\" class='pkmnName lead'>" + val.name + "</button>" + " | "
        + "Type 1: " + val.type1 + " | "
        + "Type 2: " + val.type2 + " | "
        + "Generation " + val.generation + " | "
        + val.legendary + " Legendary" + " | "
        + "<br>" + " | "
        + "Stat Total: " + val.total + " | "
        + "HP: " + val.hp + " | "
        + "Attack: " + val.attack + " | "
        + "Defense: " + val.defense + " | "
        + "Special Attack: " + val.sp_attack + " | "
        + "Special Defense: " + val.sp_defense + " | "
        + "Speed: " + val.speed + " | "
        + "</li>");
        });}
        else{items.push("Whoops! No results! Try something less specific.");}
            items.push();
            $("#search-results").html(items);
        });
    });


//"<button onclick=\"document.createElement(<img class='pkmnImage' src='https://img.pokemondb.net/artwork/"+replaceName+".jpg'>);\" class='lead'>" + val.name + "</button>"


    $("#gotoTop").click(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("gotoTop").style.display = "block";
    } else {
    document.getElementById("gotoTop").style.display = "none";
    }}


    dragElement(document.getElementById("images"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function validateForm() {
    var adress = document.forms["contactMe"]["adress"].value;
    var name = document.forms["contactMe"]["name"].value;
    var content = document.forms["contactMe"]["content"].value;
    console.log(adress + ", " + name + ", " + content);
    if (content == "") { alert("Hey, you forgot to give me somethign to read!"); return false;}
    if (adress == "" || name == "") {if (!confirm("Do you want to be Anonymous?")) {return false;}}
  }
}});