var searchbtn = document.getElementById("search-button");

function searchBtn() {
    searchbtn.click(function(event){
    document.getElementById("bgColour").style.height= "";
    search(event);
    $("#search-results").show();
    $("#gotoBottom").show();
    });
}



$("#team").click(function(event){
    document.getElementById("team").value="1";
    document.getElementById("bgColour").style.height= "";
    search(event);
    $("#search-results").show();
    $("#gotoBottom").show();
});

$(".sortBtn").click(function(){
    $(".sortMenu").hide();
    $(".sortMenu").val('Default');
    $(".sortBtn").show();
});

$("#filterClear").click(function(){
    $(".filterMenu").hide();
    $(".filterMenu").val('Default');
    $(".filterBtn").show();
    $("#Type2Btn").hide();
});

function filterClick(name){
    $("#"+name+"Btn").click(function(){
        $("#"+name+"Menu").show();
        $("#"+name+"Btn").hide();
    });
}

filterClick("Generation");
filterClick("Legendary");
filterClick("Type2");
filterClick("HighStats");
filterClick("LowStats");

$("#TypeBtn").click(function(){
    $("#TypeMenu").show();
    $("#TypeBtn").hide();
    $("#Type2Btn").show();
});