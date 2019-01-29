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
        });

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


    //$(".imageBtn").click(function(){
    //    var x = document.createElement("IMG");
    //    x.setAttribute("src", "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/"+val.name.toLowerCase().replace(' ', '-').replace('mega-', ''));
    //    document.body.li.appendChild(x);
    //});


    $("#search-button").click(function(event) {
        event.preventDefault();

        var pokeNames = $("#search-bar").val();
        var highStats = document.getElementById("HighStatsMenu").value;
        var lowStats = document.getElementById("LowStatsMenu").value;
        var generationFilt = document.getElementById("GenerationMenu").value;
        var legendFilt = document.getElementById("LegendaryMenu").value;
        var typeFilt = document.getElementById("TypeMenu").value;
        //TODO: Make a second Type menu.
        //This gets sent to python
        var queryString = "/pokedex" + "?pokeName=" + pokeNames + "&highStats=" + highStats + "&lowStats=" + lowStats + "&generationFilt=" + generationFilt + "&legendFilt=" + legendFilt + "&typeFilt=" + typeFilt;

        $.getJSON( queryString, function (json) {
            var items = [];
            $.each(json, function(key, val){
        items.push(
         "<li>" + "<img scr='https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/"+val.name.toLowerCase().replace(' ', '-').replace('mega-', '')+".png'>" + " | "
        + val.number + " | "
        + "<button class='lead imageBtn' name='" + val.name + "'>" + val.name + "</button>" + " | "
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
            });
            items.push();
            $("#search-results").html(items);
        });
    });

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
    }
    }
});