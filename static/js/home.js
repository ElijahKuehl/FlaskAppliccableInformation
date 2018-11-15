$(document).ready(function(){
    $("#clear").click(function(){
        $("#search-results").hide();
        $("#search-bar").val("");
        /*
        $(".StatHigh").hide();
        $(".StatLow").hide();
        $(".Generation").hide();
        $(".Legendary").hide();
        $(".Type").hide();
        */
    });

    $("#search-results").hide();
    $("#search-button").click(function(){
        $("#search-results").show();
        });
/*
    $(".StatHigh").hide();
    $("#StatHigh").click(function(){
        $(".StatHigh").show();
        });

    $(".StatLow").hide();
    $("#StatLow").click(function(){
        $(".StatLow").show();
        });

    $(".Generation").hide();
    $("#Generation").click(function(){
        $(".Generation").show();
        });

    $(".Legendary").hide();
    $("#Legendary").click(function(){
        $(".Legendary").show();
        });

    $(".Type").hide();
    $("#Type").click(function(){
        $(".Type").show();
        });
*/

    $("#search-button").click(function(event) {
        event.preventDefault();
        var pokeName = $("#search-bar").val();
        var queryString = "/pokedex" + "?pokeName=" + pokeName;

        $.getJSON( queryString, function (json) {
            console.log(json);
            var items = [];
            items.push();

            $.each(json, function(key, val){
        items.push(
        "<li>" + " | "
        + val.number + " | "
        + val.name + " | "
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
});