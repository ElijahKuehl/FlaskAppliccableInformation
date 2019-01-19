$(document).ready(function(){
    $("#clear").click(function(){
        $("#search-results").hide();
        $("#search-bar").val("");
        $(".sortMenu").hide();
        $(".sortBtn").show();
        $(".filterMenu").hide();
        $(".filterBtn").show();

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


    $(".filterBtn").click(function(){
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
        $(".filterMenu").hide();
        $(".filterBtn").show();
        $("#TypeMenu").show();
        $("#TypeBtn").hide();
    });


    $("#search-button").click(function(event) {
        event.preventDefault();

        //var sortHigh = $("#HighStatsMenu").val();

        var pokeNames = $("#search-bar").val();
        var sortBy = document.getElementById("HighStatsMenu").value
        var queryString = "/pokedex" + "?pokeName=" + pokeNames + "&sortBy=" + sortBy;

        $.getJSON( queryString, function (json) {
            //console.log(json);
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