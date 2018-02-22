$(document).ready(function() {
$("#workspace").hide();
$("#workspace-button").click(function(){
    $("#workspace").show();
    });
$("#clear").click(function(){
    $("#workspace").hide();
    $("#search-line").hide();
    });
$("#search-bar-button").click(function(){
    $("#search-line").show();
    });
$("#search-results").hide();
$("#search-button").click(function(){
    $("#search-results").show();
    $("#search-results").append($("#search-bar").val());
    });
});