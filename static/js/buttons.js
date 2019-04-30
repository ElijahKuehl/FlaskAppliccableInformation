// elements
var searchBtn = document.getElementById("search-button");
var teamBtn = document.getElementById("team");
var bgColor = document.getElementById("bgColour");
var searchResults = document.getElementById("search-results");
var gotoBottom = document.getElementById("gotoBottom");
var sortMenu = document.getElementByClassName("sortMenu");
var sortBtn = document.getElementByClassName("sortBtn");
var filterClear = document.getElementById("filterClear");
var filterMenu = document.getElementByClassName("filterMenu");
var filterBtn = document.getElementByClassName("filterBtn");
var type2Btn = document.getElementById("Type2Btn");
var typeBtn = document.getElementById("TypeBtn");
var typeMenu = document.getElementById("TypeMenu");

searchBtn.addEventListener("click", searchBtnAction);
teamBtn.addEventListener("click", teamBtnAction);
sortBtn.addEventListener("click", sortBtnAction);
filterClear.addEventListener("click", filterClearAction);
typeBtn.addEventListener("click", typeBtnAction);

function searchBtnAction() {
    bgColor.style.height= "";
    search(event);
    searchResults.show();
    gotoBottom.show();
}


function teamBtnAction(){
    teamBtn.value="1";
    searchBtnAction();
}

function sortBtnAction(){
    sortMenu.hide();
    sortMenu.val('Default');
    sortBtn.show();
}

function filterClearAction(){
    filterMenu.hide();
    filterMenu.val('Default');
    filterBtn".show();
    type2Btn.hide();
}

function filterClick(name){
    document.getElementById(name+"Btn").click(function(){
        document.getElementById(name+"Menu").show();
        document.getElementById(name+"Btn").hide();
    });
}

filterClick("Generation");
filterClick("Legendary");
filterClick("Type2");
filterClick("HighStats");
filterClick("LowStats");

function typeBtnAction(){
    typeMenu.show();
    typeBtn.hide();
    type2Btn.show();
}