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

    $("#search-button").click(function(event){
        search(event);
        document.getElementById("bgColour").style.height= "";
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

    $("#search-button").click(function(){
        $("#search-results").show();
        $("#gotoBottom").show();
    });

    $("#HighStatsBtn").click(function(){
        //$("#HighStatsMenu").show();
        document.getElementById( "HighStatsMenu" ).style.display="inline-block";
        console.log(document.getElementById("HighStatsMenu").style.display);
        //document.getElementById("HighStatsBtn").style.display="none";
        $("#HighStatsBtn").hide();
    });

    $("#LowStatsBtn").click(function(){
        $("#LowStatsMenu").show();
        $("#LowStatsBtn").hide();
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

    $("#TypeBtn").click(function(){
        $("#TypeMenu").show();
        $("#TypeBtn").hide();
        $("#Type2Btn").show();
    });


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


    window.onscroll = function() {scrollFunction()};

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

    function search(event){
        event.preventDefault();
        var pokeNames = $("#search-bar").val();
        var highStats = document.getElementById("HighStatsMenu").value;
        var lowStats = document.getElementById("LowStatsMenu").value;
        var generationFilt = document.getElementById("GenerationMenu").value;
        var legendFilt = document.getElementById("LegendaryMenu").value;
        var typeFilt = document.getElementById("TypeMenu").value;
        var type2Filt = document.getElementById("Type2Menu").value;
        var replaceName = "";
        var imeg = "";
        //Ill be honest idk why I made this line. if (pokeNames.toLowerCase().replace('primal ', '').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace('black ', '').replace('white ', '').replace(' cloak','').replace('%','')==""){pokeNames="";}
        //This gets sent to python
        var queryString = "/pokedex"
        + "?pokeName=" + pokeNames
        + "&highStats=" + highStats
        + "&lowStats=" + lowStats
        + "&generationFilt=" + generationFilt
        + "&legendFilt=" + legendFilt
        + "&typeFilt=" + typeFilt
        + "&type2Filt=" + type2Filt;

        $.getJSON( queryString, function (json) {
            var items = [];
            if (json.length != 0){
                var s2 = "";
                if(json.length > 1){s2="s";}
                items.push(json.length + " result"+s2+" found!");
                $.each(json, function(key, val){
                    replaceName = this.name.toLowerCase().replace('alolan ','AL').replace('dawn wings ','DW').replace('dusk mane ','DM').replace('ultra ','UU').replace('ash-','AA').replace(' x','XX').replace(' y','YY').replace('mega ', 'MM').replace('primal ', 'PP').replace('black ', 'BB').replace('white ', 'WW')
                    .replace('. ', '-').replace(' ', '-').replace('\'','').replace(' forme', '').replace(' size', '').replace(' mode', '').replace(' cloak','').replace(' style','').replace('flabébé','flabebe').replace('jr.', 'jr').replace('♂','-m').replace('♀','-f').replace('%','').replace('’','').replace(':','');
                    if (replaceName.includes('MM')){replaceName = replaceName.replace('MM', '') + "-mega";}
                    if (replaceName.includes('XX')){replaceName = replaceName.replace('XX', '') + "-x";}
                    if (replaceName.includes('YY')){replaceName = replaceName.replace('YY', '') + "-y";}
                    if (replaceName.includes('PP')){replaceName = replaceName.replace('PP', '') + "-primal";}
                    if (replaceName.includes('BB')){replaceName = replaceName.replace('BB', '') + "-black";}
                    if (replaceName.includes('WW')){replaceName = replaceName.replace('WW', '') + "-white";}
                    if (replaceName.includes('AA')){replaceName = replaceName.replace('AA', '') + "-ash";}
                    if (replaceName.includes('AL')){replaceName = replaceName.replace('AL', '') + "-alolan";}
                    if (replaceName.includes('DW')){replaceName = replaceName.replace('DW', '') + "-dawn-wings";}
                    if (replaceName.includes('DM')){replaceName = replaceName.replace('DM', '') + "-dusk-mane";}
                    if (replaceName.includes('UU')){replaceName = replaceName.replace('UU', '') + "-ultra";}
                    if (replaceName.includes('-rotom')){replaceName = "rotom-" + replaceName.replace('-rotom', '');}
                    console.log(replaceName);

                    var t1=val.type1;
                    var t2=val.type2;
                    items.push(
                    "<li>" + " | "
                    + val.number + " | "
                    + "<button onclick=\"checkArt(this.name); weaknesses('"+val.type1+"', '"+val.type2+"');\" name="+replaceName+" class='pkmnName lead'>" + val.name + "</button>" + " | "
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
            }
            else{
                items.push("Whoops! No results! Try something less specific.");
                document.getElementById("bgColour").style.height= "100%";
            }
            items.push();
            $("#search-results").html(items);
        });
    }


    dragElement(document.getElementById("images"), "img");
    dragElement(document.getElementById("weaknesses"), "weak");

    function dragElement(elmnt, name) {
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
            console.log("edge1: "+($(window).width()-155)+"  edge2: "+($(window).width()-175)+"  "+(elmnt.offsetLeft - pos1))
            if(name=="img" && ((elmnt.offsetLeft - pos1)>10&&(elmnt.offsetLeft - pos1)<40&&(elmnt.offsetTop - pos2)>260&&(elmnt.offsetTop - pos2)<300)){
                elmnt.style.top = 280 + "px";
                elmnt.style.left = 30 + "px";
            }
            if(name=="weak" && ((elmnt.offsetLeft - pos1)>($(window).width()-175)&&(elmnt.offsetLeft - pos1)<($(window).width()-155)&&(elmnt.offsetTop - pos2)>0&&(elmnt.offsetTop - pos2)<40)){
                elmnt.style.top = 30 + "px";
                elmnt.style.left = 88 + "%";
            }
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
});