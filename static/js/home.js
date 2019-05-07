$(document).ready(function(){

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