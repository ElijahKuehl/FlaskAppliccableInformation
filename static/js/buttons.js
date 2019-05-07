function clearBtnAction(){
    searchResults.style.display = "none";
    pokeNames.value="";
    // sortMenu.style.display = "none";
    // sortBtn.style.display = "inline-block";
    // filterMenu.style.display = "none";
    // filterBtn.style.display = "inline-block";
    sortMenu.value="Default";
    filterMenu.value="Default";
    sortBtnAction();
    filterClearAction();
    // $(".StatHigh").style.display = "none";
    // $(".StatLow").style.display = "none";
    // $(".Generation").style.display = "none";
    // $(".Legendary").style.display = "none";
    // $(".Type").style.display = "none";
    Type2Btn.style.display = "none";
    gotoBottom.style.display = "none";
    checkArtJS("victini");
    console.log($(window).width());
    weaknessList.style.display = "none";
    weaknessList.style.top = 30 + "px";
    weaknessList.style.left = 88 + "%";
    images.style.top = 280 + "px";
    images.style.left = 30 + "px";
    document.getElementById("pkmnImage").name = "victini";
    bgColour.style.height= "100%";
}

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

function sortBtnAction(){
    highStatsMenu.style.display = "none";
    lowStatsMenu.style.display = "none";
    highStatsMenu.value="Default";
    lowStatsMenu.value="Default";
    highStatsBtn.style.display = "inline-block";
    lowStatsBtn.style.display = "inline-block";
}

function highSortAction(){
    highStatsMenu.style.display = "inline-block";
    lowStatsMenu.style.display = "none";
    highStatsMenu.value="Default";
    lowStatsMenu.value="Default";
    highStatsBtn.style.display = "none";
    lowStatsBtn.style.display = "inline-block";
}

function lowSortAction(){
    highStatsMenu.style.display = "none";
    lowStatsMenu.style.display = "inline-block";
    highStatsMenu.value="Default";
    lowStatsMenu.value="Default";
    highStatsBtn.style.display = "inline-block";
    lowStatsBtn.style.display = "none";
}

function filterClearAction(){
    typeMenu.style.display = "none";
    type2Menu.style.display = "none";
    generationMenu.style.display = "none";
    legendaryMenu.style.display = "none";
    typeMenu.value="Default";
    type2Menu.value="Default";
    generationMenu.value="Default";
    legendaryMenu.value="Default";
    typeBtn.style.display = "inline-block";
    generationBtn.style.display = "inline-block";
    legendaryBtn.style.display = "inline-block";
    type2Btn.style.display = "none";
}

function filterClick(btn,menu){
    btn.addEventListener("click", visibility);
    function visibility(){
        menu.style.display = "inline-block";
        btn.style.display = "none";
    }
}

filterClick(generationBtn, generationMenu);
filterClick(legendaryBtn, legendaryMenu);
filterClick(type2Btn, type2Menu);
filterClick(highStatsBtn,highStatsMenu);
filterClick(lowStatsBtn,lowStatsMenu);

function typeBtnAction(){
    typeMenu.style.display = "inline-block";
    typeBtn.style.display = "none";
    type2Btn.style.display = "inline-block";
}

clear.addEventListener("click", clearBtnAction);
lowStatsBtn.addEventListener("click", lowSortAction);
highStatsBtn.addEventListener("click", highSortAction);
sortClearBtn.addEventListener("click", sortBtnAction);
filterClearBtn.addEventListener("click", filterClearAction);
typeBtn.addEventListener("click", typeBtnAction);