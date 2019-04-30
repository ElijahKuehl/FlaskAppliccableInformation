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
        $("#Type2Btn").hide();
        $("#gotoBottom").hide();
        checkArtJS("victini");
        console.log($(window).width());
        document.getElementById("weaknesses").style.display = "none";
        document.getElementById("weaknesses").style.top = 30 + "px";
        document.getElementById("weaknesses").style.left = 88 + "%";
        document.getElementById("images").style.top = 280 + "px";
        document.getElementById("images").style.left = 30 + "px";
        document.getElementById("pkmnImage").name = "victini";
        document.getElementById("bgColour").style.height= "100%";
        });

    document.getElementById("weaknesses").style.display = "none";
    $(".sortMenu").hide();
    $(".sortBtn").show();
    $(".filterMenu").hide();
    $(".filterBtn").show();
    $("#Type2Btn").hide();
    $("#search-results").hide();
    $("#resultCount").hide();


    $("#artFlip").click(function(){
        if(document.getElementById("artFlip").checked){
            document.getElementById("copyFlip").checked=true;
            checkArtJS(document.getElementById("pkmnImage").name);
        }
        else if(!document.getElementById("artFlip").checked){
            document.getElementById("copyFlip").checked=false;
            checkArtJS(document.getElementById("pkmnImage").name);
        }
    });
    $("#copyFlip").click(function(){
        if(document.getElementById("copyFlip").checked){
            document.getElementById("artFlip").checked=true;
            checkArtJS(document.getElementById("pkmnImage").name);
        }
        else if(!document.getElementById("copyFlip").checked){
            document.getElementById("artFlip").checked=false;
            checkArtJS(document.getElementById("pkmnImage").name);
        }
    });

    function checkArtJS(name){
        if (!document.getElementById("artFlip").checked){
            if (name=="silvally-normal"){name="silvally";}
            else if (name=="minior-blue-core"){name="minior-core";}
            imeg=name+".jpg";
            pkmnImage.name=name;
        }
        else if (document.getElementById("artFlip").checked){
            if (name=="silvally"){name="silvally-normal";}
            else if (name=="minior-core"){name="minior-blue-core";}
            imeg="vector/"+name+".png";
            pkmnImage.name=name;
        }
        pkmnImage.src="https://img.pokemondb.net/artwork/"+imeg;
    }


    window.onscroll = function() {scrollFunction();};

    function scrollFunction() {
        var scroll = $(window).scrollTop() + $(window).height();
        var div = $('body');
        var bottom = ((div.offset().top + div.height()) - scroll);

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {$("#gotoTop").show();}
        else {$("#gotoTop").hide();}

        if (bottom > 20) {$("#gotoBottom").show();}
        else {$("#gotoBottom").hide();}

        if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {$("#copy").show();}
        else {$("#copy").hide();}
    }


    var input = document.getElementById("search-bar");

    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();
      }
    });


});